// for (i = 0; i < 10; i++) {
//     console.log("hello")
// }

// 必須先require fs，告訴node我們想用fs
const fs = require('fs');
// console.log(fs)
// 讓創建的新資料夾名稱是參數or預設值:Project
// 因為在git上會打：node firstScript.js nodefile，所以process.argv[2]就是nodefile
const folderName = process.argv[2] || "Project";

// 當資料夾創好時，同步建立資料夾內的檔案，寫法是絕對路徑
try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/test.html`, '');
    fs.writeFileSync(`${folderName}/test.js`, '');
    fs.writeFileSync(`${folderName}/test.css`, '');
} catch (e) {
    console.log("omg~errorrrrr");
    console.log(e);
}
