module.exports = {
    name: 'blue',
    color: 'grey'
}

// 前面+module.exports是為了要輸出所寫的東西：
// 也可以寫：
const a = "hi";
const add = (x, y) => x + y;
module.exports.a = a;
module.exports.add = add;

// 注意：module.exports是一個object物件