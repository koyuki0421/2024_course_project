const express = require('express');
const router = express.Router();
// 記得加這個

// 路徑是:/shelters
router.get('/', (req, res) => {
    res.send("ALL SHELTERS")
})
router.post('/', (req, res) => {
    res.send("CREATING SHELTER")
})
// 路徑是:/shelters/:id
router.get('/:id', (req, res) => {
    res.send("VIEWING ONE SHELTER")
})
// 路徑是:/shelters/:id/edit
router.get('/:id/edit', (req, res) => {
    res.send("EDITING ONE SHELTER")
})

module.exports = router;