const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    // 把單純的定義name:String用成object，是因可以放其他東西
    name: {
        type: String,
        required: true,
        // 表name這欄不可為空值，是必須存在的
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive ya dodo!']
        // min[最小值,錯誤訊息]
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
        // enum定義一個變量的可能取值範圍，確保該變量只能取這些特定的值
    }

});

// 創建模型Product(大寫單數)
const Product = mongoose.model('Product', productSchema);

// 動態方法：schema名稱.methods.自定義的名字，是指"單個實例"的時候使用動態方法
// productSchema.methods.greet = function () {
//     console.log("HELLLO!!! HI!! HOWDY!!! ")
//     console.log(`- from ${this.name}`)
// }

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;  // 假變成真、真變成假
    return this.save();
}

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}

// 這邊就是所謂的"單個實例"，指定了name:'Mountain Bike'
const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Mountain Bike' });
    console.log(foundProduct)
    await foundProduct.toggleOnSale();
    console.log(foundProduct)
    await foundProduct.addCategory('Outdoors')
    console.log(foundProduct)
}
// findProduct();



// statics靜態方法，是指整個模型一起做什麼的時候使用，這邊this指Product這個模型
// 像是整個模型一起創建、更新、刪除等動作
productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 })
}
// Product.fireSale().then(res => console.log(res))



// const bike = new Product({ name: 'Cycling Jersey', price: 28.50, categories: ['Cycling'], size: 'XS' })
// bike.save()
//     .then(data => {
//         console.log("IT WORKED!")
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH NO ERROR!")
//         console.log(err)
//     })


// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: 9 }, { new: true, runValidators: true })
// runValidators: true是表示在我update新東西的時候，我還要依照著我schema的模型定義去驗證
//     .then(data => {
//         console.log("IT WORKED!")
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH NO ERROR!")
//         console.log(err)
//     })


