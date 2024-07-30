const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

// .virtual虛擬屬性，屬性不會在資料庫哩，但在mongoose裡
// .get() 方法用来定義这个虛擬屬性的獲取器（getter），
// 也可以選用 .set() 方法来定義虛擬屬性的設置器（setter），允许你通过设置 fullName 来更新 first 和 last 名。
// 打tammy.fullName 會得到'Tammy Chow'
personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
})

// 在save之前(.pre)，要做的function
personSchema.pre('save', async function () {
    this.first = 'YO';
    this.last = 'MAMA';
    console.log("ABOUT TO SAVE!!!!")
})
// 在save之後(.post)，要做的function
personSchema.post('save', async function () {
    console.log("JUST SAVED!!!!")
})

const Person = mongoose.model('Person', personSchema);
// 老師在git上有打const tammy = new Person({first: 'Tammy',last:'Chow'})



