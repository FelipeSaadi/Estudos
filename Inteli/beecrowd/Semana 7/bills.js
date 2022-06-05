var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

var value = Number(lines.shift());
var remaining = value;
var bills100;
var bills50;
var bills20;
var bills10;
var bills5;
var bills2;
var bills1;

if(remaining >= 100) {
    bills100 = parseInt(remaining/100);
    remaining = remaining%100;
}
else {
    bills100 = 0;
}
if(remaining >= 50) {
    bills50 = parseInt(remaining/50);
    remaining = remaining%50;
}
else {
    bills50 = 0;
}
if(remaining >= 20) {
    bills20 = parseInt(remaining/20);
    remaining = remaining%20;
}
else {
    bills20 = 0;
}
if(remaining >= 10) {
    bills10 = parseInt(remaining/10);
    remaining = remaining%10;
}
else {
    bills10 = 0;
}
if(remaining >= 5) {
    bills5 = parseInt(remaining/5);
    remaining = remaining%5;
}
else {
    bills5 = 0;
}
if(remaining >= 2) {
    bills2 = parseInt(remaining/2);
    remaining = remaining%2;
}
else {
    bills2 = 0;
}
if(remaining >= 1) {
    bills1 = parseInt(remaining/1);
    remaining = remaining%1;
}
else {
    bills1 = 0;
}

console.log(value)
console.log(`${bills100} nota(s) de R$ 100,00`);
console.log(`${bills50} nota(s) de R$ 50,00`);
console.log(`${bills20} nota(s) de R$ 20,00`);
console.log(`${bills10} nota(s) de R$ 10,00`);
console.log(`${bills5} nota(s) de R$ 5,00`);
console.log(`${bills2} nota(s) de R$ 2,00`);
console.log(`${bills1} nota(s) de R$ 1,00`);