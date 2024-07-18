const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, () => {
    console.log("Listening on Port 3000")
})

// view engine是文件上的範例：https://expressjs.com/en/5x/api.html#app.set
app.set('view engine', 'ejs');
// 這邊做的是就算git上的路徑不是在當前路徑，也可以找的到我的views資料夾中的.ejs檔案
// __dirname就是當前路徑的意思
// 所以需要先定義這個：const path = require('path');並使用path.join()
app.set('views', path.join(__dirname, '/views'))

// http://localhost:3000/
// res.render()可以callback檔案
app.get('/', (req, res) => {
    res.render('home')
})
// 不用/views/home，因為views是預設目錄，也不用.ejs，因為第10行已經設定.ejs檔了