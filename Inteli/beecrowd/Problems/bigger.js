let input = require('fs').readFileSync('./dev/stdin', 'utf8');
let lines = input.split(/\s+/);

let a = Number(lines.shift());
let b = Number(lines.shift());
let c = Number(lines.shift());

let biggerAB = (a + b + Math.abs(a - b)) / 2;
let biggerBC = (b + c + Math.abs(b - c)) / 2;

if (biggerAB > biggerBC) {
    console.log(`${biggerAB} eh o maior`);
}
else {
    console.log(`${biggerBC} eh o maior`);
}