let input = require('fs').readFileSync('./dev/stdin', 'utf8');
let lines = input.split(/\s+/);

let A = Number(lines.shift());
let B = Number(lines.shift());

console.log(`SOMA = ${A+B}`);