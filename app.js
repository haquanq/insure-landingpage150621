const ham_btn = document.querySelector(".nav_ham")
const menu = document.querySelector(".navmenu")
const menuContent = document.querySelector(".navmenu div")
const body = document.querySelector("body")

let openState = false

ham_btn.addEventListener("click", () => {
    if (openState == false) {
        ham_btn.classList.add("open");
        body.style.overflow = "hidden";
        menu.style.display = "flex";
        setTimeout(() => menu.style.height = "100%", 30);
        setTimeout(() => menuContent.style.opacity = 1, 300);
        openState = true;
    } else {
        ham_btn.classList.remove("open");
        body.style.overflow = null;
        setTimeout(() => menuContent.style.opacity = null,);
        setTimeout(() => menu.style.height = null, 300);
        setTimeout(() => menu.style.display = null, 650);
        openState = false;
    }
})

window.addEventListener("resize", () => {
    if (openState == true && window.innerWidth > 800) {
        ham_btn.classList.remove("open");
        body.style.overflow = null;
        setTimeout(() => menuContent.style.opacity = null,);
        setTimeout(() => menu.style.height = null, 300);
        setTimeout(() => menu.style.display = null, 650);
        openState = false;
    }
})