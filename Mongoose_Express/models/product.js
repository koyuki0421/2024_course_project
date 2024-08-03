const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruit', 'vegetable', 'dairy']
        // enum可以確保該字段的值必須是預先定義的集合中的一個。
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
// 匯出這個檔案(模型)