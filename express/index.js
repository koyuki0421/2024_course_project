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
app.use((req, res) => {
    console.log("we got a new request!!!")
    // res.send("hello~this is a response")
    res.send("<h1>this is my webpage~~~!</h1>")
})

// 最終git上的內容會出現兩個內容：
// listening on port 3000  -->第一個
// 去重新載入:localhost:3000
// we got a new request!!! -->第二個


// ***注意當我每次更改我的code時，都需要在git上重新進去，就是先離開在進入
// >ctrl+c 再 >node index.js