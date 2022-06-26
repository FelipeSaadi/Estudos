let input = require('fs').readFileSync('./dev/stdin', 'utf8');
let lines = input.split(/\s+/);

let code1 = Number(lines.shift());
let qty1 = Number(lines.shift());
let price1 = Number(lines.shift());
let code2 = Number(lines.shift());
let qty2 = Number(lines.shift());
let price2 = Number(lines.shift());

let total = qty1 * price1 + qty2 * price2;

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);