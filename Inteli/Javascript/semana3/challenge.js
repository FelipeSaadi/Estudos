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
let previous
function changeChallenge(value) {
    if(previous) {
        previous.style.display = "none"
    }
    let actualChallenge = document.getElementById(value)
    actualChallenge.style.display = "block"
    previous = actualChallenge
}

// Versão com Jquery
// $(function() {
//     $('#challenge-selection').change(function(){
//     $('.challenges').hide();
//     $('#' + $(this).val()).show();
//     console.log($('#' + $(this).val()))
//     });
// });

// Challenge 2
function generateBills(){
    const result = document.getElementById("challenge2-result")
    result.innerHTML = ""
    let bills200
    let bills100
    let bills50
    let bills20
    let bills10
    let bills5
    let bills2
    let bills1
    let remaining = document.getElementById("challenge2-value").value
    console.log(remaining)
    if(remaining >= 200) {
        bills200 = parseInt(remaining/200)
        remaining = remaining%200
        let divBills200 = document.createElement("div")
        divBills200.setAttribute("id", "challenge2-bills200")
        result.appendChild(divBills200)
        if(bills200 > 1) {
            document.getElementById("challenge2-bills200").innerHTML = `Você recebeu ${bills200} notas de 200 reais.`
        }
        else {
            document.getElementById("challenge2-bills200").innerHTML = `Você recebeu ${bills200} nota de 200 reais.`
        }
    }
    if(remaining >= 100) {
        bills100 = parseInt(remaining/100)
        remaining = remaining%100
        let divBills100 = document.createElement("div")
        divBills100.setAttribute("id", "challenge2-bills100")
        result.appendChild(divBills100)
        if(bills100 > 1) {
            document.getElementById("challenge2-bills100").innerHTML = `Você recebeu ${bills100} notas de 100 reais.`
        }
        else {
            document.getElementById("challenge2-bills100").innerHTML = `Você recebeu ${bills100} nota de 100 reais.`
        }
    }
    if(remaining >= 50) {
        bills50 = parseInt(remaining/50)
        remaining = remaining%50
        let divBills50 = document.createElement("div")
        divBills50.setAttribute("id", "challenge2-bills50")
        result.appendChild(divBills50)
        if(bills50 > 1) {
            document.getElementById("challenge2-bills50").innerHTML = `Você recebeu ${bills50} notas de 50 reais.`
        }
        else {
            document.getElementById("challenge2-bills50").innerHTML = `Você recebeu ${bills50} nota de 50 reais.`
        }
    }
    if(remaining >= 20) {
        bills20 = parseInt(remaining/20)
        remaining = remaining%20
        let divBills20 = document.createElement("div")
        divBills20.setAttribute("id", "challenge2-bills20")
        result.appendChild(divBills20)
        if(bills20 > 1) {
            document.getElementById("challenge2-bills20").innerHTML = `Você recebeu ${bills20} notas de 20 reais.`
        }
        else {
            document.getElementById("challenge2-bills20").innerHTML = `Você recebeu ${bills20} nota de 20 reais.`
        }
    }
    if(remaining >= 10) {
        bills10 = parseInt(remaining/10)
        remaining = remaining%10
        let divBills10 = document.createElement("div")
        divBills10.setAttribute("id", "challenge2-bills10")
        result.appendChild(divBills10)
        if(bills10 > 1) {
            document.getElementById("challenge2-bills10").innerHTML = `Você recebeu ${bills10} notas de 10 reais.`
        }
        else {
            document.getElementById("challenge2-bills10").innerHTML = `Você recebeu ${bills10} nota de 10 reais.`
        }
    }
    if(remaining >= 5) {
        bills5 = parseInt(remaining/5)
        remaining = remaining%5
        let divBills5 = document.createElement("div")
        divBills5.setAttribute("id", "challenge2-bills5")
        result.appendChild(divBills5)
        if(bills5 > 1) {
            document.getElementById("challenge2-bills5").innerHTML = `Você recebeu ${bills5} notas de 5 reais.`
        }
        else {
            document.getElementById("challenge2-bills5").innerHTML = `Você recebeu ${bills5} nota de 5 reais.`
        }
    }
    if(remaining >= 2) {
        bills2 = parseInt(remaining/2)
        remaining = remaining%2
        let divBills2 = document.createElement("div")
        divBills2.setAttribute("id", "challenge2-bills2")
        result.appendChild(divBills2)
        if(bills2 > 1) {
            document.getElementById("challenge2-bills2").innerHTML = `Você recebeu ${bills2} notas de 2 reais.`
        }
        else {
            document.getElementById("challenge2-bills2").innerHTML = `Você recebeu ${bills2} nota de 2 reais.`
        }
    }
    if(remaining >= 1) {
        bills1 = parseInt(remaining/1)
        remaining = remaining%1
        let divBills1 = document.createElement("div")
        divBills1.setAttribute("id", "challenge2-bills1")
        result.appendChild(divBills1)
        if(bills1 > 1) {
            document.getElementById("challenge2-bills1").innerHTML = `Você recebeu ${bills1} notas de 1 reais.`
        }
        else {
            document.getElementById("challenge2-bills1").innerHTML = `Você recebeu ${bills1} nota de 1 reais.`
        }
    }
}

// Challenge3
let mews = {
    0: [24.90, 23.80],
    1: [45.90, 42.80],
    2: [56.90, 53.80]
}
let mewType
let mewQtd
let mewName
let payMethod

function buy() {
    mewType = $("#mew-type")[0].value
    mewQtd = $("#mew-qtd")[0].value
    mewName = $("#mew-type")[0][mewType].innerText
    payMethod = $('input[name="pay-type"]:checked')[0].id

    console.log(payMethod)
    let price = calculatePrice(mewType, mewQtd)

    let discount = calculateDescount(price, payMethod)
    price -= discount

    console.log(price, discount)
    $("#challenge3-result")[0].innerHTML = `
        <div>Você comprou ${mewQtd}kg de ${mewName}. </div>
        <div>Você pagou R$ ${price.toFixed(2)}${payMethod == "money-type" ? ", com um desconto de R$ "+discount+".":"."}</div>
    `
}

function calculatePrice(type, qtd) {
    let price
    
    if(qtd <= 5) {
        price = mews[type][0]*qtd
    }
    else {
        price = mews[type][1]*qtd
    }
    
    return price
}

function calculateDescount(price, payMethod) {
    let discount

    switch (payMethod) {
        case "credit-type":
            discount = 0
            break;
        default:
            discount = (price*0.05).toFixed(2)
            break;
    }
    
    return discount
}