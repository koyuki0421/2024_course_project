const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

// 這邊使用"靜態資產or靜態檔"且根據public的目錄(通常位置放在根目錄那邊)
// 老師習慣public目錄裡放css檔案根js檔案
// 連接方法看subrebbit.ejs的link
// 寫法使用絕對路徑的方式path.join(__dirname, 'public')
app.use(express.static(path.join(__dirname, 'public')))

// 我的路由:http://localhost:3000
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
// 不用/views/home，因為views是預設目錄，也不用.ejs，因為第18行已經設定.ejs檔了

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { num })
})
// {rand :num}的意思是傳遞第二個變數，是一個object，前面是keyname後面是value
// 也可以key value同名{ num }這樣即可

app.get('/r/:subrebbit', (req, res) => {
    const { subrebbit } = req.params;
    const data = redditData[subrebbit];
    if (data) {
        res.render('subrebbit', { ...data });
    } else {
        res.render('notfound', { subrebbit })
    }
})

app.get('/cats', (req, res) => {
    const cats = ['a', 'b', 'c', 'd', 'e'];
    // 假設有一個array
    res.render('cats', { cats })
})