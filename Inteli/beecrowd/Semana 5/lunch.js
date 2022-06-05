var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

var code = Number(lines.shift())
var qty = Number(lines.shift())

switch (code) {
    case 1:
        console.log(`Total: R$ ${(qty*4.0).toFixed(2)}`)
        break;
    case 2:
        console.log(`Total: R$ ${(qty*4.5).toFixed(2)}`)
        break;
    case 3:
        console.log(`Total: R$ ${(qty*5.0).toFixed(2)}`)
        break;
    case 4:
        console.log(`Total: R$ ${(qty*2.0).toFixed(2)}`)
        break;
    case 5:
        console.log(`Total: R$ ${(qty*1.5).toFixed(2)}`)
        break;
    default:
        break;
}