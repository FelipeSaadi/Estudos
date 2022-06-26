let input = require('fs').readFileSync('./dev/stdin', 'utf8');
let lines = input.split(/\s+/);

let x1 = Number(lines.shift());
let y1 = Number(lines.shift());
let x2 = Number(lines.shift());
let y2 = Number(lines.shift());

let p1 = Math.pow((x2 - x1), 2);
let p2 = Math.pow((y2 - y1), 2);

let distance = Math.sqrt((p1 + p2));
console.log(distance.toFixed(4));