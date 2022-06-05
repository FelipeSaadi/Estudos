var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

var A = Number(lines.shift())
var B = Number(lines.shift())
var C = Number(lines.shift())
var D = Number(lines.shift())

if (C > 0 && D > 0  && A % 2 === 0) {
    if (B > C && D > A && (C+D) > (A+B)) {
        console.log("Valores aceitos")
    }
    else {
        console.log("Valores nao aceitos")
    }
}
else {
    console.log("Valores nao aceitos")
}