var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

var numbers = []
var n1 = Number(lines.shift())
var n2 = Number(lines.shift())
var n3 = Number(lines.shift())

numbers.push(n1, n2, n3)

for (i = 0; i < 3; i++) {
    if (numbers[i] > numbers[i+1]) {
        var temp = numbers[i+1]
        numbers[i+1] = numbers[i]
        numbers[i] = temp
        
        i = -1
    }
}

console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])

console.log('')

console.log(n1)
console.log(n2)
console.log(n3)