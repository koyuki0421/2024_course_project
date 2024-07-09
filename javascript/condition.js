console.log('It is working!!!')

// 下面是if、else用法
// console.log("before conditional")
// if (1 + 1 === 3) {
//     console.log("math still works")
// }
// console.log("after conditional")

// let random = Math.random();
// if (random < 0.5) {
//     console.log("your number is less than 0.5!!!")
// } else {
//     console.log("your number is greater (or equal) than 0.5!!!")
// }
// console.log(random);

// ---------我是分隔線

// 下面是if、else if、else用法(1)
// const dayOfWeek = prompt("enter a day").toLowerCase();
// if (dayOfWeek === "monday") {
//     console.log("omg i hate mondays...")
// } else if (dayOfWeek === "saturday") {
//     console.log("yaaa i like saturday!")
// } else if (dayOfWeek === "friday") {
//     console.log("friday is good")
// } else {
//     console.log("meh")
// }

// 下面是if、else if、else用法(2)
// 0-5 free、
// 5-10 $10、
// 10-65 $20、
// 65以上 $10
// const age = 8;
// if (age < 5) {
//     console.log("free")
// } else if (age < 10) {
//     console.log("$10")
// } else if (age < 65) {
//     console.log("$20")
// } else {
//     console.log("check your age")
// }

// ---------我是分隔線

// 想要輸入密碼長度為6以上且沒有空白間格
// const password = prompt("please enter a new password");
// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         console.log("valid password~long enough password and no space")
//     } else {
//         console.log("password have space...")
//     }
// } else {
//     console.log("password too short! must be 6+ characters")
// }

// 使用&&來完成
// const password = prompt("please enter a new password");
// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("valid password")
// } else {
//     console.log("incorrect format")
// }

// or的用法：||
// 0-5 free、
// 5-10 $10、
// 10-65 $20、
// 65以上 $10

// const age = -67;
// if ((age >= 0 && age < 5) || age >= 65) {
//     console.log("free")
// } else if (age >= 5 && age < 10) {
//     console.log("$10")
// } else if (age >= 10 && age < 65) {
//     console.log("$20")
// } else {
//     console.log("check your age")
// }

// ---------我是分隔線

// 整個否定式表示法(1)：假如firstName為空值的話
// let firstName = prompt("enter your first name");
// if (!firstName) {
//     firstName = prompt("try again!!")
// } else {
//     console.log("i got your firstName~")
// }

// 整個否定式表示法(2)：不是>=5和不是>=65的age
const age = 44;
if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("you are not a baby or a senior")
}