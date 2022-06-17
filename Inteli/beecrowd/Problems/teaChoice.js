let input = require('fs').readFileSync('./dev/stdin', 'utf8');
let lines = input.split(/\s+/);

let teaChosen = lines.shift();
let rightChoice= 0;

for(i = 0; i < 5; i++) {
    if(lines[i] == teaChosen) {
        rightChoice += 1;
    }
}
console.log(rightChoice);