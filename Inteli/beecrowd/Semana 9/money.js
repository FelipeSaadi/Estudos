let input = require('fs').readFileSync('./dev/stdin', 'utf8');
let lines = input.split('\n');

let value = Number(lines.shift());
let remaining = value;
let bills100;
let bills50;
let bills20;
let bills10;
let bills5;
let bills2;
let cents1;
let cents50;
let cents25;
let cents10;
let cents5;
let cent1;

if (remaining >= 100) {
    bills100 = parseInt(remaining / 100);
    remaining = remaining % 100;
}
else {
    bills100 = 0;
}
if (remaining >= 50) {
    bills50 = parseInt(remaining / 50);
    remaining = remaining % 50;
}
else {
    bills50 = 0;
}
if (remaining >= 20) {
    bills20 = parseInt(remaining / 20);
    remaining = remaining % 20;
}
else {
    bills20 = 0;
}
if (remaining >= 10) {
    bills10 = parseInt(remaining / 10);
    remaining = remaining % 10;
}
else {
    bills10 = 0;
}
if (remaining >= 5) {
    bills5 = parseInt(remaining / 5);
    remaining = remaining % 5;
}
else {
    bills5 = 0;
}
if (remaining >= 2) {
    bills2 = parseInt(remaining / 2);
    remaining = remaining % 2;
}
else {
    bills2 = 0;
}
if (remaining >= 1) {
    cents1 = parseInt(remaining / 1);
    remaining = remaining % 1;
}
else {
    cents1 = 0;
}
if (remaining > 0) {
    remaining = remaining*100
}
if (remaining >= 50) {
    cents50 = parseInt(remaining / 50);
    remaining = remaining % 50;
}
else {
    cents50 = 0;
}
if (remaining >= 25) {
    cents25 = parseInt(remaining / 25);
    remaining = remaining % 25;
}
else {
    cents25 = 0;
}
if (remaining >= 10) {
    cents10 = parseInt(remaining / 10);
    remaining = remaining % 10;
}
else {
    cents10 = 0;
}
if (remaining >= 5) {
    cents5 = parseInt(remaining / 5);
    remaining = remaining % 5;
}
else {
    cents5 = 0;
}
if (remaining >= 1) {
    cent1 = parseInt(remaining / 1);
    remaining = remaining % 1;
}
else {
    cent1 = 0;
}

console.log("NOTAS:")
console.log(`${bills100} nota(s) de R$ 100.00`);
console.log(`${bills50} nota(s) de R$ 50.00`);
console.log(`${bills20} nota(s) de R$ 20.00`);
console.log(`${bills10} nota(s) de R$ 10.00`);
console.log(`${bills5} nota(s) de R$ 5.00`);
console.log(`${bills2} nota(s) de R$ 2.00`);
console.log("MOEDAS:")
console.log(`${cents1} moeda(s) de R$ 1.00`);
console.log(`${cents50} moeda(s) de R$ 0.50`);
console.log(`${cents25} moeda(s) de R$ 0.25`);
console.log(`${cents10} moeda(s) de R$ 0.10`);
console.log(`${cents5} moeda(s) de R$ 0.05`);
console.log(`${cent1} moeda(s) de R$ 0.01`);