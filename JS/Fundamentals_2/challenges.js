"use strict";

/*
// Coding Challenge 1
const calcAvarage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Test 1
let avgDolphins = calcAvarage(44, 23, 71);
let avgKoalas = calcAvarage(65, 54, 49);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins");
    }
}
checkWinner(avgDolphins, avgKoalas);

// Test 2
avgDolphins = calcAvarage(85, 54, 41);
avgKoalas = calcAvarage(23, 34, 27);

checkWinner(avgDolphins, avgKoalas);

// Challenge 2
const bills = [125, 555, 44];
const tips = [], total = [];

const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        let tip = bill * 15 / 100;
        total.push(bill + tip);
        return tips.push(tip);
    } else {
        let tip = bill * 20 / 100;
        total.push(bill + tip);
        return tips.push(tip);
    }
}

calcTip(bills[0]);
calcTip(bills[1]);
calcTip(bills[2]);

console.log(tips);
console.log(total);

// Challenge 3
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = (this.mass / this.height ** 2).toFixed(1);
        return this.BMI;
    }
};
const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = (this.mass / this.height ** 2).toFixed(1);
        return this.BMI;
    }
};

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI}).`);
} else if (john.BMI > mark.BMI) {
    console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI}).`);
} else {
    console.log(`The BMI of ${mark.fullName} and ${john.fullName} is equal.`);
}
*/