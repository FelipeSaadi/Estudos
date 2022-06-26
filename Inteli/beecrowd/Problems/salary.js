let input = require('fs').readFileSync('./dev/stdin', 'utf8');
let lines = input.split(/\s+/);

let number = Number(lines.shift());
let hours = Number(lines.shift());
let price = Number(lines.shift());

let salary = hours * price;

console.log(`NUMBER = ${number}`);
console.log(`SALARY = U$ ${salary.toFixed(2)}`);