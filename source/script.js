let navBar = document.querySelector("nav");
let hamMenu = document.querySelector("img.ham")
let navUl = document.querySelector("nav ul")
let navUlA = document.querySelectorAll("nav ul a")
let navUlALi = document.querySelectorAll("nav ul a li")


document.onload = onresize = function () {
    if (this.innerWidth > 799) {
        navBar.style.transition = "none";
    }
}
hamMenu.addEventListener("click", function () {
    navBar.removeAttribute("style");
    navBar.classList.toggle("opened");
})

document.addEventListener("click", function (e) {
    if (e.target !== navBar) {
    }
    if (navBar.classList.contains("opened") && e.target !== navUl && e.target !== hamMenu && e.target !== navUlA &&
    e.target !== navUlALi[0] && e.target !== navUlALi[1]&& e.target !== navUlALi[2]&& e.target !== navUlALi[3] &&
    e.target !== navUlA[0] && e.target !== navUlA[1] && e.target !== navUlA[2] && e.target !== navUlA[3]) {
        navBar.classList.toggle("opened");
    }
})