const mongoose = require('mongoose');
const { Schema } = mongoose;
// 記得要加這個'為了使用結構模式'，就是user: { type: Schema.Types.ObjectId, ref: 'User' }

mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

// 一個user可以有很多tweet貼文，但每個tweet貼文只屬於一個user(1:N)
// 原本const userSchema = new mongoose.Schema({...但因使用結構模式，
// 所以變成const userSchema = new Schema({...
const userSchema = new Schema({
    username: String,
    age: Number
})

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
})

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// 這邊的user只會顯示id
// const makeTweets = async () => {
//     // const user = new User({ username: 'chickenfan99', age: 61 });
//     const user = await User.findOne({ username: 'chickenfan99' })
//     const tweet2 = new Tweet({ text: 'bock bock bock my chickens make noises', likes: 1239 });
//     tweet2.user = user;
//     tweet2.save();
// }

// makeTweets();

// 讓user不只顯示id，而是顯示全部資訊
const findTweet = async () => {
    const t = await Tweet.find({}).populate('user')
    // 是因user: { type: Schema.Types.ObjectId, ref: 'User' }，而寫('user')
    console.log(t);
}

findTweet();

// 例子：讓user不只顯示id，還顯示特定要顯示的資訊
// const findTweet1 = async () => {
//     const t = await Tweet.find({}).populate('user','username')
//     // 是因user: { type: Schema.Types.ObjectId, ref: 'User' }，而寫('user')
//     // 後面放上還想要顯示出來的特定資訊username
//     console.log(t);
// }