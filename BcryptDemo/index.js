const bcrypt = require('bcrypt');

// 這邊hashPassword('monkey')後出來的密碼是儲存在資料庫中的資料
// const hashPassword = async (pw) => {
//     const salt = await bcrypt.genSalt(12);
//     // .genSalt表生成一個salt
//     // 這裡的 12 代表 Salt Rounds 的數量，決定了生成 salt 的複雜度和計算時間。
//     // 數字越大，生成 salt 的時間越長，密碼hash的安全性也越高，但同時也會使hash的速度變慢。
//     // 12 是一個常見的選擇，提供了不錯的安全性和性能平衡。
//     const hash = await bcrypt.hash(pw, salt);
//     // .hash表生成一個hash(使用者輸入的密碼,剛才生成的salt)
//     console.log(salt);
//     console.log(hash);
// }

// 另一個簡略寫法
const hashPassword = async (pw) => {
    //Pass in the plain text password and the number of rounds:
    // 12表來生成 salt 的 rounds 值，意味著 bcrypt 會在內部生成一個 salt，
    // 並使用 12 作為 salt 的複雜度進行hash計算。
    const hash = await bcrypt.hash(pw, 12);
    console.log(hash);
}

const login = async (pw, hashedPw) => {
    // hashedPw是資料庫儲存的hash過後的密碼
    const result = await bcrypt.compare(pw, hashedPw);
    // .compare是一個函數，去比較輸入的密碼與資料庫中的是否一致
    if (result) {
        console.log("LOGGED YOU IN! SUCCESSFUL MATCH!")
    } else {
        console.log("INCORRECT!")
    }
}

hashPassword('monkey');
login('monkey', '$2b$12$YS9GdWUznoM7r1522knuY.1dq1taWra5zgG7N1WzHs4j.fridopWS')