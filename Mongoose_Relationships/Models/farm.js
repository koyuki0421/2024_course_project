const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
});

// 一個農場有多個產品，每個產品屬於同一個農場(1:N)，但農場可以創建不只一個
// https://mongoosejs.com/docs/populate.html
const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
    // ref:表引用，放productSchema的名稱Product
    // 把產品save到farms上後只會出現id資訊
})

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

// Product.insertMany([
//     { name: 'Goddess Melon', price: 4.99, season: 'Summer' },
//     { name: 'Sugar Baby Watermelon', price: 4.99, season: 'Summer' },
//     { name: 'Asparagus', price: 3.99, season: 'Spring' },
// ])

const makeFarm = async () => {
    const farm = new Farm({ name: 'Full Belly Farms', city: 'Guinda, CA' });
    const melon = await Product.findOne({ name: 'Goddess Melon' });
    // 找到產品後push到farm上面並save
    farm.products.push(melon)
    await farm.save()
    console.log(farm);
    // 原本只出現產品id
}

const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'Full Belly Farms' });
    // 找到同農場後，把另一個產品push上去並save
    const watermelon = await Product.findOne({ name: 'Sugar Baby Watermelon' });
    farm.products.push(watermelon);
    await farm.save();
    console.log(farm);
    // 原本只出現產品id
}

// 用.populate('products')就可看到完整的產品信息，而不只是產品的id。
// 是因'products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]'，而放('products')
Farm.findOne({ name: 'Full Belly Farms' })
    .populate('products')
    .then(farm => console.log(farm))