let color;
let elemento;
const ele1 = document.getElementById("div1");
const ele2 = document.getElementById("div2");
const ele3 = document.getElementById("div3");
const ele4 = document.getElementById("div4");
const mc = document.querySelector(".muestra_color");

document.addEventListener("keydown", function (event) {
    if (event.key == "a" || event.key == "A") {
        color = "rgb(111, 0, 255)";
    } else if (event.key == "s" || event.key == "S") {
        color = "rgb(255, 81, 0)";
    } else if (event.key == "d" || event.key == "D") {
        color = "rgb(231, 231, 120)";
    }
    mc.style.backgroundColor = color;
})

pintar = (elemento, color) => { elemento.style.backgroundColor = color };

ele1.addEventListener("click", function () {
    pintar(ele1, color);
})
ele2.addEventListener("click", function () {
    pintar(ele2, color);
})
ele3.addEventListener("click", function () {
    pintar(ele3, color);
})
ele4.addEventListener("click", function () {
    pintar(ele4, color);
})