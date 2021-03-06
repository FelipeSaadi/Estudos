/*
let country = "Brasil";
let continent = "América do Sul";
let population = 212;

console.log(country);
console.log(continent);
console.log(population + " milhões");

let isIsland = false;
let language;

console.log(typeof country);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

language = "Portuguese";

let halfPopulation = population / 2;
console.log(halfPopulation + " milhões");

population += 1;
console.log(population);
population -= 1;

let finlandPopulation = 6;

let myCountryHigherPopulation = population > finlandPopulation;
console.log(myCountryHigherPopulation);

let avaragePopulation = 33;
let myCountryLowerAvarage = population < avaragePopulation;

console.log(myCountryLowerAvarage);

let description = `${country} is in ${continent}, and its ${population} million people speak portuguese`;

console.log(description);

if (population >= 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${avaragePopulation - population} million below average`);
}

console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // 617
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); //1143

const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));
if (numNeighbours === 1) console.log("Only 1 border");
else if (numNeighbours > 1) console.log("More than 1 border");
else console.log("No borders"), console.log(typeof numNeighbours);

if (language === "english" && population < 50 && !isIsland) console.log("You should live in Brazil :)");
else console.log("Brazil does not meet your criteria :(")

const language = "mandarin";

switch (language) {
    case "chinese":
    case "mandarin":
        console.log("MOST number of native speakers!");
        break;
    case "spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "english":
        console.log("3rd place");
        break;
    case "hindi":
        console.log("Number 4");
        break;
    case "arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too :D");
}

const country = "Brasil";
const population = 212;

console.log(`${country}'s population is ${population > 33 ? "above" : "below"} average`);
*/