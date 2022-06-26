let input = require('fs').readFileSync('./dev/stdin', 'utf8');
let lines = input.split(/\s+/);

let name = lines.shift();
let salary = Number(lines.shift());
let comission = Number(lines.shift())*0.15;

let finalSalary = salary + comission;

console.log(`TOTAL = R$ ${finalSalary.toFixed(2)}`);