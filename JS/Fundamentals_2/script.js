"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("You can drive :D");

// const interface = "Áudio";
// const private = 537;

function logger() {
    console.log("My name is Felipe");
}

logger();
logger();
logger();

function fruitProcessor(apple, orange) {
    const juice = `Juice with ${apple} apples and ${orange} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const orangeJuice = fruitProcessor(0, 5);
console.log(orangeJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("22");

function calcAge1(year, birthYear) {
    return year - birthYear;
}
const age1 = calcAge1(2021, 1998);
console.log(age1);

const calcAge2 = function (year, birthYear) {
    return year - birthYear;
}
const age2 = calcAge2(2021, 1998);
console.log(age2);

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1998);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1998, "Felipe"));
console.log(yearsUntilRetirement(2000, "Sarah"));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 5));

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1960, "Felipe"));
console.log(yearsUntilRetirement(2000, "Sarah"));

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
//friends = ["Bob", "Alice"];

const firstName = "Felipe";
const felipe = [firstName, "Saadi", 2037 - 1998, "Programmer", friends];
console.log(felipe);
console.log(felipe.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

// Basic Array Operations
const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop(); // Remove the last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

friends.indexOf("Steven");
friends.indexOf("Bob");

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
    console.log("You have a friend called Steven");
}

// Introduction to Objects
const felipeArray = [
    "Felipe",
    "Saadi",
    2037 - 1998,
    "Programmer",
    ["Michael", "Peter", "Steven"]
];

const felipe = {
    firstName: "Felipe",
    lastName: "Saadi",
    age: 22,
    job: "Programmer",
    friends: ["Michael", "Peter", "Steven"]
};
console.log(felipe);

console.log(felipe.firstName);
console.log(felipe["lastName"]);

const nameKey = "Name";
console.log(felipe["first" + nameKey]);
console.log(felipe["last" + nameKey]);

const interestIn = prompt(`What do you want to know about ${felipe.firstName}? Choose between firstName, lastName, age, job, and friends`);

if (felipe[interestIn]) {
    console.log(felipe[interestIn])
} else {
    console.log("Wrong request! Choose between firstName, lastName, age, job, and friends");
}

felipe.location = "Brazil";
felipe["instagram"] = "@FelipeSaadi";
console.log(felipe);

// Challenge
console.log(`${felipe.firstName} has ${felipe.friends.length} friends, and his best friend is called ${felipe.friends[felipe.friends.indexOf("Michael")]}`);
*/