"use strict";

/*
function describeCountry(country, population, capitalCity) {
    const countryDescription = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return countryDescription;
}

const countryOneDescription = describeCountry("Brazil", 212, "Brasília");
console.log(countryOneDescription);

const countryTwoDescription = describeCountry("USA", 326, "Washington");
console.log(countryTwoDescription);

const countryThreeDescription = describeCountry("Japan", 125, "Tokyo");
console.log(countryThreeDescription);

const worldPopulation = 7900;
let countryName, countryPopulation;

// Function Declaration
function percentageOfWorld1(country, population) {
    countryName = country;
    countryPopulation = population;
    return (population / worldPopulation * 100).toFixed(1);
}
const chinaWorldPercent1 = percentageOfWorld1("China", 1441);
console.log(`${countryName} has ${countryPopulation} million people, so it's about ${chinaWorldPercent1}% of the world population`);

const brazilWorldPercent1 = percentageOfWorld1("Brazil", 212);
console.log(`${countryName} has ${countryPopulation} million people, so it's about ${brazilWorldPercent1}% of the world population`);

const usaWorldPercent1 = percentageOfWorld1("USA", 326);
console.log(`${countryName} has ${countryPopulation} million people, so it's about ${usaWorldPercent1}% of the world population`);

// Function Expression
const percentageOfWorld2 = function (country, population) {
    countryName = country;
    countryPopulation = population;
    return (population / worldPopulation * 100).toFixed(1);
}

const chinaWorldPercent2 = percentageOfWorld2("China", 1441);
console.log(`${countryName} has ${countryPopulation} million people, so it's about ${chinaWorldPercent2}% of the world population`);

const brazilWorldPercent2 = percentageOfWorld2("Brazil", 212);
console.log(`${countryName} has ${countryPopulation} million people, it's about ${brazilWorldPercent2}% of the world population`);

const usaWorldPercent2 = percentageOfWorld2("USA", 326);
console.log(`${countryName} has ${countryPopulation} million people, it's about ${usaWorldPercent2}% of the world population`);

const worldPopulation = 7900;
let countryName, countryPopulation;

const percentageOfWorld3 = (country, population) => {
    countryName = country;
    countryPopulation = population;
    return (population / worldPopulation * 100).toFixed(1);
}

const chinaWorldPercent3 = percentageOfWorld3("China", 1441);
console.log(`${countryName} has ${countryPopulation} million people, it's about ${chinaWorldPercent3}% of the world population`);

const brazilWorldPercent3 = percentageOfWorld3("Brazil", 212);
console.log(`${countryName} has ${countryPopulation} million people, it's about ${brazilWorldPercent3}% of the world population`);

const usaWorldPercent3 = percentageOfWorld3("USA", 326);
console.log(`${countryName} has ${countryPopulation} million people, it's about ${usaWorldPercent3}% of the world population`);

// Function calling other
const worldPopulation = 7900;

function percentOfWorld(population) {
    return (population / worldPopulation * 100).toFixed(1);
}
function describePopulation(country, population) {
    const countryWorldPopulation = percentOfWorld(population);
    console.log(`${country} has ${population} million people, it's which is about ${countryWorldPopulation}% of the world.`);
}
describePopulation("Brazil", 212);
describePopulation("USA", 326);
describePopulation("China", 1441);

// Arrays Introduction assignment
const countries = ["Brazil", "USA", "Japan", "Germany"];
const populations = [212, 326, 123, 83];

console.log(populations.length === 4);

const worldPopulation = 7900;

const percentageOfWorld = function (population) {
    return (population / worldPopulation * 100).toFixed(1);
}

const percentages = [
    percentageOfWorld(populations[0]),
    percentageOfWorld(populations[1]),
    percentageOfWorld(populations[2]),
    percentageOfWorld(populations[3])
]

console.log(countries);
console.log(percentages);

// Basic Array Operations
const neighbours = ["Venezuela", "Guiana", "Suriname", "Guiana Francesa", "Uruguai", "Argentina", "Paraguai", "Bolivia", "Colômbia"];

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
    console.log("Probably not a central European country :D");
}

if (neighbours.includes("Bolivia")) {
    neighbours[neighbours.indexOf("Bolivia")] = "Equador";
}
console.log(neighbours);

// Introduction to Objects
const myCountry = {
    name: "Brazil",
    capital: "Brasilia",
    language: "Portuguese",
    population: "212",
    neighbours: [],
    describe: function () {
        console.log(`${this.name} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    },
    checkIsland: function () {
        this.isIsland = this.neighbours ? false : true;
        return console.log(this.isIsland);
    }
};
console.log(myCountry);

// Dot vs Bracket Notation
console.log(`${myCountry.name} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry["population"]);

// Object Methods
myCountry.describe();
myCountry.checkIsland();
*/