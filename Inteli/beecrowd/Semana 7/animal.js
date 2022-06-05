var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

var type1 = lines.shift()
var type2 = lines.shift()
var type3 = lines.shift()

if (type1 == "vertebrado") {
    if (type2 == "ave") {
        if (type3 == "carnivoro") {
            console.log("aguia")
        }
        else {
            console.log("pomba")
        }
    }
    else {
        if (type3 == "onivoro") {
            console.log("homem")
        }
        else {
            console.log("vaca")
        }
    }
}
else {
    if (type2 == "inseto") {
        if (type3 == "hematofago") {
            console.log("pulga")
        }
        else {
            console.log("lagarta")
        }
    }
    else {
        if (type3 == "hematofago") {
            console.log("sanguessuga")
        }
        else {
            console.log("minhoca")
        }
    }
}