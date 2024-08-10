const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name cannot be blank']
        // ['name cannot be blank'] 是一個自定義的錯誤訊息，如果沒有提供 name 值，
        // Mongoose 會觸發驗證錯誤，並顯示這個錯誤訊息。
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
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;