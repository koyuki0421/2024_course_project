const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username cannot be blank']
    },
    password: {
        type: String,
        required: [true, 'Password cannot be blank']
    }
})

// 靜態方法，自定義名字findAndValidate
userSchema.statics.findAndValidate = async function (username, password) {
    const foundUser = await this.findOne({ username });
    // 這邊的this是資料庫的user，在資料庫找到username
    const isValid = await bcrypt.compare(password, foundUser.password);
    return isValid ? foundUser : false;
    // 如果isValid是true就回傳foundUser，否則就回傳false
}

// 設定一個前提pre，讓在save之前，要先把password hash過後才save
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    // 表密碼如果沒有被修改的話，就直接跳next()，就是直接save的意思
    // .isModified表假如密碼有被修改的話，再讓新密碼重新hash後再save的意思
    this.password = await bcrypt.hash(this.password, 12);
    // 這邊的this指的是user，user.save()的user
    next();
})

module.exports = mongoose.model('User', userSchema);