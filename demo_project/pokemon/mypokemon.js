// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`


    pokemon.appendChild(newImg);
    // 把div放入圖片
    pokemon.appendChild(label);
    // 把div放入#1等文字
    container.appendChild(pokemon)
    // 把div放進container裡面
}

const button = document.querySelector('button[type="button"]');

const changecolor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return { r, g, b };
}

button.addEventListener("click", function () {
    const { r, g, b } = changecolor();
    const newcolor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = newcolor;

    const labels = document.querySelectorAll('.pokemon span');
    const rgbSum = r + g + b;

    labels.forEach(label => {
        if (rgbSum < 350) {
            label.style.color = 'white';
        } else {
            label.style.color = 'black';
        }
    });
});
