let input = require('fs').readFileSync('./dev/stdin', 'utf8');
let lines = input.split(/\s+/);

let N = Number(lines.shift());
let stars = lines;
let totalSheeps = 0;
let sheepsStolen = 0;
let SUM = 0;

for(let i = 0; i < N; i++) {
    stars[i] = Number(stars[i]);
    totalSheeps += stars[i];
}

let i = 0;
while (i >= 0 && i < N) {
    if(stars[i] > 0) {
        sheepsStolen++;
    }
    if(stars[i] % 2 === 0) {
        if(sheepsStolen == i+1) {
            SUM++;
        }
        stars[i] -= 1;
        i--;
    }
    else {
        SUM++;
        stars[i] -= 1;
        i++;
    }
}

console.log(SUM, totalSheeps-sheepsStolen);