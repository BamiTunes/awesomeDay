const colors = [
    "#808080",
    "#c07756",
    "#d1af70",
    "#d1af70",
    "#e8e3a9",
    "#4e667e",
    "#dcb9a5",
    "#8d422f",
    "#ca2915",
    "#ece9e2",
    "#2c7bbe",
    "#620404",
    "#3f1d01",
    "#fae386",
    "#d4ab39",
    "#050f18"
];

const bgHexCode = document.querySelector("#bgHexCode");
const btn = document.querySelector("#button");

function changeColor(){
    const color = colors[Math.floor(Math.random() * colors.length)];
    console.log(color);
    document.body.style.backgroundColor = color;
    bgHexCode.innerText = color;
}

btn.onclick = changeColor;


console.log("Bucchy");