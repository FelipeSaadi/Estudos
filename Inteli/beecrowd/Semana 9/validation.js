let input = require('fs').readFileSync('./dev/stdin', 'utf8');
let lines = input.split('\n');

let sucess = 0;
let media = 0;

while (sucess < 2) {
    let grade = Number(lines.shift());

    if (grade >= 0 && grade <= 10) {
        media += grade;
        sucess++;
    }
    else {
        console.log("nota invalida");
    }
}
media = media / 2;
console.log(`media = ${media.toFixed(2)}`);