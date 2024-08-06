const express = require('express');
const app = express();
const morgan = require('morgan');

const AppError = require('./AppError');


app.use(morgan('tiny'));

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
})

app.use('/dogs', (req, res, next) => {
    console.log("I LOVE DOGS!!")
    next();
})

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    }
    throw new AppError('password required', 401);
    // res.send("PASSWORD NEEDED!")
    // throw new AppError('Password required!', 400)
}

app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('HOME PAGE!')
})

// .fly() express會回應html respond+預設錯誤代碼500
app.get('/error', (req, res) => {
    chicken.fly()
})

app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('WOOF WOOF!')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('MY SECRET IS: Sometimes I wear headphones in public so I dont have to talk to anyone')
})

app.get('/admin', (req, res) => {
    throw new AppError('You are not an Admin!', 403)
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND!')
})


// app.use((err, req, res, next) => {
//     console.log("******************************************")
//     console.log("*****************ERROR*****************")
//     console.log("******************************************")
//     console.log(err)
//     next(err)
// })

// 這是通用的，若是其他上面自定義的話，就會蓋過通用的status和message
app.use((err, req, res, next) => {
    const { status = 500, message = 'Something Went Wrong' } = err;
    // 上面進行解構，且各給一個預設值500和'Something...'
    res.status(status).send(message)
})


app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})