document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt)
})

// const input = document.querySelector('input');
// input.addEventListener('keydown', function (e) {
//     console.log(e.key)
//     // 我按了什麼鍵(e代表event事件的意思)
//     console.log(e.code)
//     // 位置在鍵盤的哪裡
// })
// input.addEventListener('keyup', function () {
//     console.log("KEYUP")
//     // 按下去後放開的時候會顯示KEYUP
// })


// window表在整個視窗裡，如果我按了鍵盤上的鍵(keydown)，就發生以下function
window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        case 'ArrowLeft':
            console.log("LEFT!");
            break;
        case 'ArrowRight':
            console.log("RIGHT!");
            break
        default:
            console.log("IGNORED!")
    }
})