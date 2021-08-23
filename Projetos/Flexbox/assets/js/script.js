window.onload = function () {
    document.querySelector(".menuMobile").addEventListener("click", function () {
        if (document.querySelector(".menu nav ul").style.display == "flex") {
            document.querySelector(".menu nav ul").style.display = "none"
        } else {
            document.querySelector(".menu nav ul").style.display = "flex"
        }
    })
}
let active = ev => {
    document.querySelector(".active").classList.remove("active")
    ev.target.classList.add("active")
}
