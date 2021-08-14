export function generateNumbers(draws, generatedNumbers = []) {
    let qty = +draws
    if (generatedNumbers.length === qty) {
        return generatedNumbers.sort((n1, n2) => n1 - n2)
    }
    const number = parseInt(Math.random(0) * 61)
    if (!generatedNumbers.includes(number)) {
        return generateNumbers(qty, [...generatedNumbers, number])
    } else {
        return generateNumbers(qty, generatedNumbers)
    }
}