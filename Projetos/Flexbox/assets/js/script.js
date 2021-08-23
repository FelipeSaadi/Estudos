window.onload = function () {
    document.querySelector(".menuMobile").addEventListener("click", function () {
        document.querySelector("nav .active").classList.remove("active")
        if (document.querySelector(".menu nav ul").style.display == "flex") {
            document.querySelector(".menu nav ul").style.display = "none"
        } else {
            document.querySelector(".menu nav ul").style.display = "flex"
        }
    })


}
let active = elem => {
    document.querySelector(".active").classList.remove("active")
    elem.target.classList.add("active")
}
