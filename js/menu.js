let burgerBtn = document.querySelector(".header__burger");
let closeBtn = document.querySelector(".header__close-btn");
let hideMenu = document.querySelector(".header__hide-menu");
burgerBtn.addEventListener("click", function () {
    burgerBtn.style.display = "none";
    closeBtn.style.display = "block";
    hideMenu.style.display = "flex";
})
closeBtn.addEventListener("click", function () {
    burgerBtn.style.display = "block";
    closeBtn.style.display = "none";
    hideMenu.style.display = "none";
})