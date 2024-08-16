const express = require('express');
const app = express();
// npm下載並加這行
const session = require('express-session');

// express-session的session id會存在伺服器中(postman、google等)而不是瀏覽器
// 每當get下面得路徑時，express-session會把session id給cookie，不會給任何的數據給cookie
// 在id沒有被竄改的前提下，讓cookie去找到store session中相對應的id並跑下面的程式

// 必須設定下面兩行
// secret: 'thisisnotagoodsecret':這是用來簽名和驗證會話ID的秘密字串
// resave: false：這個選項告訴會話中介軟體是否每次都重新保存會話，false表只有在會話確實有更改時，才會保存會話。
// saveUninitialized: false:是否為未初始化的會話保存 cookie，false表只有當會話有數據時，才會保存會話。
const sessionOptions = { secret: 'thisisnotagoodsecret', resave: false, saveUninitialized: false }
app.use(session(sessionOptions));

app.get('/viewcount', (req, res) => {
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    res.send(`You have viewed this page ${req.session.count} times`)
})

app.get('/register', (req, res) => {
    const { username = 'Anonymous' } = req.query;
    req.session.username = username;
    // 把username(= 'Anonymous')存到req.session.username中
    res.redirect('/greet')
})

app.get('/greet', (req, res) => {
    const { username } = req.session;
    // 從req.session中提取 username 屬性
    res.send(`Welcome back, ${username}`)
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})