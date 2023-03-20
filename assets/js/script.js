/*function pintar() {
    ele = document.getElementById("ele1")
    ele.style.backgroundColor = 'yellow'
}
ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);*/

//3.1.

/*let ele;
paint = (ele) => { ele.style.backgroundColor = "yellow" };

ele = document.querySelector("#ele1");
ele.addEventListener("click", function () {
    paint(ele);
})*/

//3.2

let ele;
paint = (ele, color = "green") => { ele.style.backgroundColor = color };

ele = document.querySelector("#ele1");
ele.addEventListener("click", function () {
    paint(ele, "yellow");
})