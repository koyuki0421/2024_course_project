const express = require("express");
const app = express();

// 設ports為3000;而listen是一個用法
app.listen(3000, () => {
    console.log("listening on port 3000")
})
// 執行後git上會一直等待指令，就去本地機器(網頁)打localhost:3000
// 會出現:Cannot GET/

// 所以要設一個當我伺服器運作是有一個callback可以回傳給我
// 通常會有兩個變數：請求和回應
// res.send會實際送出HTTP回應，且只能有一個res.send
// app.use((req, res) => {
//     console.log("we got a new request!!!")
//     // res.send("hello~this is a response")
//     res.send("<h1>this is my webpage~~~!</h1>")
// })

// 最終git上的內容會出現兩個內容：
// listening on port 3000  -->第一個
// 去重新載入:localhost:3000
// we got a new request!!! -->第二個


// ***注意當我每次更改我的code時，都需要在git上重新進去，就是先離開在進入
// >ctrl+c 再 >node index.js

// routing路由：會用.get('想去的路徑',callback function())
// 想去的路徑例子：/cats 或 /dogs 或 '/'只有斜線的稱「根路由」 或 '*'表示除了特定路由之外(/cats...等)的都跑到這邊(所以要放在最後面)
app.get('/cats', (req, res) => {
    res.send("cat reequest")
})
// 然後去本地機器(網頁)打localhost:3000/cats
app.get('/dogs', (req, res) => {
    res.send("dog reequest")
})
app.get('/', (req, res) => {
    res.send("this is the home page!")
})

// 這邊寫的是定義一個路徑模式:bubreddit，冒號表變數，後面字串是變數名稱(自訂)
app.get('/r/:subreddit', (req, res) => {
    // 這邊進行解構:會取出/r/後面的東西
    const { subreddit } = req.params;
    res.send(`<h1>hi ${subreddit}</h1>`)
})
app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>hi this is PostID:${postId} on the ${subreddit}</h1>`)
})

app.get('*', (req, res) => {
    res.send(`I don't know this routing~~!`)
})