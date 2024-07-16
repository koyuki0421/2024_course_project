// 要引用的另一個js檔，以檔名module.exports.color為例，不用+.js
// 寫法：前面樣要./然後後面是路徑
const colors = require('./module.exports.color')

console.log(colors)
// 會出現：{ name: 'blue', color: 'grey', a: 'hi', add: [Function: add] }
console.log(colors.add(3, 3))

