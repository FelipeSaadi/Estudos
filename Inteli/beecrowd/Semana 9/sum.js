let input = require('fs').readFileSync('./dev/stdin', 'utf8');
let lines = input.split(' ');

let A = Number(lines.shift());
let N = Number(lines.shift());
let SUM = 0;

while (N <= 0) {
    N = Number(lines.shift());
}

for(i = 0; i < N; i++) {
    SUM += A+i;
}
console.log(SUM);