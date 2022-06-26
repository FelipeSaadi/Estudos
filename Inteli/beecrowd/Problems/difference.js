let input = require('fs').readFileSync('./dev/stdin', 'utf8');
let lines = input.split(/\s+/);

let A = Number(lines.shift());
let B = Number(lines.shift());
let C = Number(lines.shift());
let D = Number(lines.shift());

let difference = A * B - C * D;

console.log(`DIFERENCA = ${difference}`);