let input = require('fs').readFileSync('./dev/stdin', 'utf8');
let lines = input.split(/\s+/);

let a = Number(lines.shift());
let b = Number(lines.shift());
let c = Number(lines.shift());

let triangle = a * c / 2;
let circle = 3.14159 * Math.pow(c, 2);
let trapezio = (a+b)*c/2;
let quadrado  = Math.pow(b, 2);
let retangle  = a*b;

console.log(`TRIANGULO: ${triangle.toFixed(3)}`);
console.log(`CIRCULO: ${circle.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);
console.log(`QUADRADO: ${quadrado.toFixed(3)}`);
console.log(`RETANGULO: ${retangle.toFixed(3)}`);