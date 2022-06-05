var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

var salary = Number(lines.shift());
var newSalary = 0;
var percentual = 0;

if (salary <= 400) {
    percentual = 0.15;
    newSalary = salary + salary * percentual;
}
else if (salary <= 800) {
    percentual = 0.12;
    newSalary = salary + salary * percentual;
}
else if (salary <= 1200) {
    percentual = 0.10;
    newSalary = salary + salary * percentual;
}
else if (salary <= 2000) {
    percentual = 0.07;
    newSalary = salary + salary * percentual;
}
else {
    percentual = 0.04;
    newSalary = salary + salary * percentual;
}

console.log(`Novo salario: ${newSalary.toFixed(2)}`);
console.log(`Reajuste ganho: ${(newSalary - salary).toFixed(2)}`);
console.log(`Em percentual: ${(percentual*100).toFixed(0)} %`);