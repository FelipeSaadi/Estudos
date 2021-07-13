/*
// Challenge 1
let markMass, markHeight, markBMI, markHigherBMI;
let johnMass, johnHeight, johnBMI;

markMass = 78;
markHeight = 1.69;
markBMI = markMass / markHeight ** 2;

johnMass = 92;
johnHeight = 1.95;
johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI, johnBMI);

markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);

if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
} else {
    console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
}

// Challenge 2

markMass = 95;
markHeight = 1.88;
markBMI = markMass / markHeight ** 2;

johnMass = 85;
johnHeight = 1.76;
johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI, johnBMI);

markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);

if (markHigherBMI) {
    console.log(`Mark's (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
} else {
    console.log(`John's (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
}

// Challenge 3

let dolphins = 0, koalas = 0, game = 0;
let gameDolphinsPts = [97, 112, 101];
let gameKoalasPts = [109, 95, 106];


while (game < 3) {
    compete(gameDolphinsPts[game], gameKoalasPts[game])
    game++
    if (game === 3) {
        dolphins = dolphins / game;
        koalas = koalas / game;
    }
}

console.log(dolphins, koalas)
if (dolphins > koalas && dolphins >= 100) console.log("Dolphins wins the trophy!");
else if (dolphins < koalas && koalas >= 100) console.log("Koalas wins the trophy!");
else if (dolphins === koalas && dolphins >= 100) console.log("Both win the trophy!");
else console.log("No team wins the trophy")

function compete(dolphinsPts, koalasPts) {
    dolphins += dolphinsPts;
    koalas += koalasPts;
}
*/