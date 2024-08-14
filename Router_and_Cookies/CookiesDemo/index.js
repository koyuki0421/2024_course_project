const express = require('express');
const app = express();

// 下載解析cookie節點包:https://www.npmjs.com/package/cookie-parser
const cookieParser = require('cookie-parser');
// 注意:通常singcookie的Secret key:thisismysecret會寫在環境變數裡
// 所以當加了下面的{signed: true}時，就會拿環境變數裡的Secret key與從cookie中取出的value，
// 去做signcookie的動作:https://www.freeformatter.com/hmac-generator.html
// 最後出來結果一樣就代表沒有被竄改
app.use(cookieParser('thisismysecret'));

app.get('/greet', (req, res) => {
    const { name = 'No-name' } = req.cookies;
    res.send(`Hey there, ${name}`)
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'henrietta');
    res.cookie('animal', 'harlequin shrimp')
    res.send('OK SENT YOU A COOKIE!!!')
})

// singcookie:為了驗證cookie有沒有被竄改，加signed: true就表示要用singcookie
// 竄改並不是要加密或隱藏cookie的value =>這邊的value是grape
app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true })
    res.send('OK SIGNED YOUR FRUIT COOKIE!')
})

app.get('/verifyfruit', (req, res) => {
    console.log(req.cookies) // 這邊不會出現上面singcookie的資料(name:fruit、value:grape)
    console.log(req.signedCookies) // 打.signedCookies才會出現上面singcookie的資料
    res.send(req.signedCookies)
})

app.listen(3000, () => {
    console.log("SERVING!")
})