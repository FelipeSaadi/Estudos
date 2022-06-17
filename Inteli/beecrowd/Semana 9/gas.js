let input = require('fs').readFileSync('./dev/stdin', 'utf8');
let lines = input.split('\n');

let hours = Number(lines.shift());
let km = Number(lines.shift());
let liters = km*hours/12

console.log(liters.toFixed(3))