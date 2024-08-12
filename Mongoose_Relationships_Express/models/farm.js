const mongoose = require('mongoose');
const Product = require('./product');
const { Schema } = mongoose;

const farmSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Farm must have a name!']
    },
    city: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Email required']
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
});

// DELETE ALL ASSOCIATED PRODUCTS AFTER A FARM IS DELETED
// Mongoose文件中間件:在文件生命週期的某些階段運行（例如，在保存或刪除之前或之後）。
farmSchema.post('findOneAndDelete', async function (farm) {
    if (farm.products.length) {
    // 如果products有長度的話表有產品資訊
        const res = await Product.deleteMany({ _id: { $in: farm.products } })
        // $in: farm.products表指定array中的任何一個值的產品。
        console.log(res);
    }
})

const Farm = mongoose.model('Farm', farmSchema);



module.exports = Farm;