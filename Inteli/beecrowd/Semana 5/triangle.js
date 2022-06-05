var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

var numbers = [];
numbers.push(Number(lines.shift()));
numbers.push(Number(lines.shift()));
numbers.push(Number(lines.shift()));

var A = 0;
var B = 0;
var C = 0;

for (i=0; i < 3; i++) {
    if (numbers[i] < numbers[i+1]) {
        var temp = numbers[i+1];
        numbers[i+1] = numbers[i];
        numbers[i] = temp;

        i = -1;
    }
}
A = numbers[0];
B = numbers[1];
C = numbers[2];

if (A >= (B + C)) {
    console.log("NAO FORMA TRIANGULO");
}
else {
    if ((A*A) == (B*B + C*C)) {
        console.log("TRIANGULO RETANGULO");
    }
    else if ((A*A) > (B*B + C*C)) {
        console.log("TRIANGULO OBTUSANGULO");
    }
    else {
        console.log("TRIANGULO ACUTANGULO");
    }

    if (A == B && B == C) {
        console.log("TRIANGULO EQUILATERO");
    }
    else if (A == B || A == C || B == C){
        console.log("TRIANGULO ISOSCELES");
    }
}