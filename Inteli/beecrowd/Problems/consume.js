let input = require('fs').readFileSync('./dev/stdin', 'utf8');
let lines = input.split(/\s+/);

let km = Number(lines.shift());
let liters = Number(lines.shift());

let litersByHour = km/liters;

console.log(`${litersByHour.toFixed(3)} km/l`);