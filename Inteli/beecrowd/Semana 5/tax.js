var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

var salary = Number(lines.shift());
var tax = 0
var moneyToVerify = salary - 2000

if (salary <= 2000) {
    console.log("Isento")
}
else {
    if(salary >= 3000) {
        tax += 1000 * 0.08
        moneyToVerify -= 1000

        if(salary >= 4500) {
            tax += 1500 * 0.18
            moneyToVerify -= 1500
            tax += moneyToVerify * 0.28
        }
        else {
            tax += moneyToVerify * 0.18
        }
    }
    else {
        tax += (moneyToVerify) * 0.08
    }

    console.log(`R$ ${tax.toFixed(2)}`)
}