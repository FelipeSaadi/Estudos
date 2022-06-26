let input = require('fs').readFileSync('./dev/stdin', 'utf8');
let lines = input.split(/\s+/);

let km = Number(lines.shift());

let distance = km*2;

console.log(`${distance} minutos`);