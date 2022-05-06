const GRAVITY = 10
function calcV0(){
    let v0 = document.getElementById("velocity").value
    return v0
}
function calcT() {
    let v = calcV0()
    let t = v/GRAVITY
    showT(t)
}
function calcHmax() {
    let t = calcV0()
    hmax = t^2/(2*GRAVITY)
    showHmax(hmax)
}
function calc() {
    calcT()
    calcHmax()
}
function showT(value) {
    document.getElementById("resultT").innerText = "O resultado de V0/g é: "+value
}
function showHmax(value) {
    document.getElementById("resultHmax").innerText = "O resultado de V0^2/2g é: "+value
}
// Versão com onchange no select
// let previous
// function changeChallenge(value) {
//     if(previous) {
//         previous.style.display = "none"
//     }
//     let actualChallenge = document.getElementById(value)
//     actualChallenge.style.display = "block"
//     previous = actualChallenge
// }

// Versão com Jquery
$(function() {
    $('#challenge-selection').change(function(){
    $('.challenges').hide();
    $('#' + $(this).val()).show();
    console.log($('#' + $(this).val()))
    });
});