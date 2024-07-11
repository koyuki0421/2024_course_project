// 把變數都放一起，就不用像下面一個列出來
const p1 = {
    value : 0,
    span : document.querySelector("#span1"),
    button : document.querySelector("#buttonp1"),
};
const p2 = {
    value : 0,
    span : document.querySelector("#span2"),
    button : document.querySelector("#buttonp2"),
};

const h1 = document.querySelector("h1");
// const span1 = document.querySelector("#span1");
// const span2 = document.querySelector("#span2");
// const buttonp1 = document.querySelector("#buttonp1");
// const buttonp2 = document.querySelector("#buttonp2");
const reset = document.querySelector("#reset");
const playTo = document.querySelector("#playTo");

// let span1value = 0;
// let span2value = 0;
let winningscore = 5;
let isGameOver = false;

// 這個是通用function
function updateScores(player,opponent){
    if (!isGameOver) {
        player.value += 1;
        if (player.value === winningscore) {
            isGameOver = true;
            player.span.classList.add("has-text-success");
            opponent.span.classList.add("has-text-danger");
            // 下面是禁用button
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.span.textContent = player.value;
    }
}
p1.button.addEventListener("click", function () {
    updateScores(p1,p2)
})
p2.button.addEventListener("click", function () {
    updateScores(p2,p1)
})


// 下面是p1、p2兩個玩家的個別function寫法
// buttonp1.addEventListener("click", function () {
//     if (!isGameOver) {
//         span1value += 1;
//         if (span1value === winningscore) {
//             isGameOver = true;
//             span1.classList.add("has-text-success");
//             span2.classList.add("has-text-danger");
//             // 下面是禁用button
//             buttonp1.disabled = true;
//             buttonp2.disabled = true;
//         }
//         span1.textContent = span1value;
//     }
// })

// buttonp2.addEventListener("click", function () {
//     if (!isGameOver) {
//         span2value += 1;
//         if (span2value === winningscore) {
//             isGameOver = true;
//             span2.classList.add("has-text-success");
//             span1.classList.add("has-text-danger");
//             // 下面是禁用button
//             buttonp1.disabled = true;
//             buttonp2.disabled = true;
//         }
//         span2.textContent = span2value;
//     }
// })

playTo.addEventListener("change", function () {
    winningscore = parseInt(this.value);
    resetfunction();
})
reset.addEventListener("click", resetfunction)

function resetfunction() {
    isGameOver = false;
    for (let p of [p1,p2]){
        p.value = 0;
        p.span.textContent = 0;
        p.span.classList.remove("has-text-success" , "has-text-danger");
        p.button.disabled = false;
    }
}
// 上面是高級寫法(合併後)；下面是舊的寫法(function合併前，變數名稱不同)
// function resetfunction() {
//     isGameOver = false;
//     span1value = 0;
//     span2value = 0;
//     span1.textContent = 0;
//     span2.textContent = 0;
//     span1.classList.remove("has-text-success" , "has-text-danger");
//     span2.classList.remove("has-text-success", "has-text-danger");
//     // 下面是可以用button
//     buttonp1.disabled = false;
//     buttonp2.disabled = false;
// }