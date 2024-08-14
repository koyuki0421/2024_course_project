const express = require('express');
const router = express.Router();

// router.use()表在admin.js檔案中的每個路由都要用這個中間件
// 就跟之前的要先定義一個中間件，再把它插到需要的路徑中間的做法不一樣
router.use((req, res, next) => {
    if (req.query.isAdmin) {
        return next();
    }
    return res.send("SORRY NOT AN ADMIN!")
})

router.get('/topsecret', (req, res) => {
    res.send('THIS IS TOP SECRET')
})
router.get('/deleteeverything', (req, res) => {
    res.send('OK DELETED IT ALL!')
})

module.exports = router;
