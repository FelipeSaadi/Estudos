let input = require('fs').readFileSync('./dev/stdin', 'utf8');
let lines = input.split(/\s+/);

let n1 = Number(lines.shift());
let n2 = Number(lines.shift());
let n3 = Number(lines.shift());

let media = (n1 * 2 + n2 * 3 + n3 * 5)/(2+3+5)

console.log(`MEDIA = ${media.toFixed(1)}`);