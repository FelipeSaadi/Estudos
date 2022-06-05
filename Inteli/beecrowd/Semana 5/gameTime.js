var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

var start = Number(lines.shift());
var end = Number(lines.shift());
var duration = 0;

if (start == end) {
    console.log("O JOGO DUROU 24 HORA(S)");
}
else {
    if (start < end) {
        duration = end - start;
    }
    else {
        duration = 24 - start + end;
    }
    console.log(`O JOGO DUROU ${duration} HORA(S)`);
}