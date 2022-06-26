let input = require('fs').readFileSync('./dev/stdin', 'utf8');
let lines = input.split(/\s+/);

let raio = Number(lines.shift());

let volume = (4 / 3) * 3.14159 * Math.pow(raio, 3);

console.log(`VOLUME = ${volume.toFixed(3)}`);