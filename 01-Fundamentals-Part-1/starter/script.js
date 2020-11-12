/*
let js = "amazing";
//if(js === "amazing") alert ("JS is fun!");
console.log(40+8+23-10);
console.log("Jonas");


let firstName = "Jonas";
let lastName = "Smith";
console.log("First Name: " + firstName);
console.log("Last Name: " + lastName);

const PI = 3.14;
*/

/*
let country = "USA";
console.log(typeof country);
let continent = "North America";
let popuation = 37500000;

console.log(country, continent, popuation);
//console.log(true);

// console.log(typeof true);
// console.log(typeof 23);
// console.log(typeof "true");

// dynamic type - repurposing an existing variable
country = true;
console.log(typeof country);


// variable dec: let vs cont vs var

// LET - value can be changed
let age = 38;
age = 31; //age variable mutated - assigned a new value

// CONST - value can never be changed | immutable variable | always needs initial values
const birthYear = 1980;

// VAR - old way | avoid whenever possible | prior to ES6 for variable declaration

var job = "Programmer";
job = "Teacher";
console.log(job);

const isIsland = false;
const language = "English";
console.log(isIsland, popuation, country, language);

const currentYear = 2020;
const ageHemant = currentYear - 1982;
const ageChitra = currentYear - 1987;
console.log(ageHemant, ageChitra);
console.log("Half Age: " + ageChitra/2);
console.log(2**5); // exponents

let firstName = "Jonas";
let lastName = "Smith";
console.log(firstName + " " + lastName); // string concat

// math operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x-=10;
console.log(x);

// compare operators
console.log(ageChitra > ageHemant);

*/

/*
const markMass = 78;
const johnMass = 95;
const markHeight = 1.69;
const johnHeight = 1.88;

// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight **2;
console.log(markBMI + " " + johnBMI);

let markHigherBMI = (markBMI > johnBMI);
console.log(markHigherBMI);
*/

/*
// Template literals using backticks
const firstName = "Hemant";
const job = "Architect";
const currentYear = 2020;
const birthYear = 1982;
const jonasNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`
console.log(jonasNew);

// pre ES6
console.log('String on \n\
multiple \n\
lines');

// ES6+
console.log(`String
on
multiple
lines`);
*/

/*
const age = 17;
const isOldEnoughToDrive = age >=18;
if (isOldEnoughToDrive) {
    console.log(`Old Enough to drive! 🥳 👻 `); // emoji: CMD + CTRL + SPACE
}
else {
    const yearsLeft = 18 - age;
    console.log(`Not old enough to drive! Please wait ${yearsLeft} year(s)! 😔 `);
}
*/

/*
// const markMass = 78;
// const johnMass = 95;
// const markHeight = 1.69;
// const johnHeight = 1.88;

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;
console.log(markBMI + " " + johnBMI);

// let markHigherBMI = (markBMI > johnBMI);
// console.log(markHigherBMI);

if (markBMI > johnBMI) {
  console.log(
    `Mark's BMI (${markBMI}) is greater than John's BMI (${johnBMI})`
  );
} else {
  console.log(
    `John's BMI (${johnBMI})is greater than Mark's BMI (${markBMI}) `
  );
}

// Type conversion
const inputYear = "1991";
console.log(Number(inputYear));
const yearOne = 2005;
console.log(typeof yearOne);
console.log(String(yearOne));

// Type Coercion + vs -
console.log("I am " + 23 + " years old"); // converted to string using +
console.log("23" - "10" - 3); // converted to number using -
console.log("23" / "2");
console.log("23" > "13");
console.log("23" < 14);
*/

//CODING CHALLENGE 3

const dolphinsGame1 = 97;
const dolphinsGame2 = 112;
const dolphinsGame3 = 101;
const koalasGame1 = 109;
const koalasGame2 = 95;
const koalasGame3 = 106;

let avgDolphinsScore = (dolphinsGame1 + dolphinsGame2 + dolphinsGame3) / 3;
let avgKoalasScore = (koalasGame1 + koalasGame2 + koalasGame3) / 3;

// if (avgDolphinsScore > avgKoalasScore) {
//   console.log(
//     `Dolphins ${avgDolphinsScore} is higher than Koalas ${avgKoalasScore}`
//   );
// } else if (avgDolphinsScore < avgKoalasScore) {
//   console.log(
//     `Koalas ${avgKoalasScore} is higher than Dolphins ${avgDolphinsScore} `
//   );
// } else console.log(`Dolphins and Koalas have the same avg score. DRAW!`);

if (avgDolphinsScore > avgKoalasScore && avgDolphinsScore > 100) {
  console.log(
    `Dolphins ${avgDolphinsScore} is higher than Koalas ${avgKoalasScore}`
  );
} else if (avgDolphinsScore < avgKoalasScore && avgKoalasScore > 100) {
  console.log(
    `Koalas ${avgKoalasScore} is higher than Dolphins ${avgDolphinsScore} `
  );
} else if (avgDolphinsScore === avgKoalasScore && avgKoalasScore > 100) {
  console.log(`DRAW!`);
} else console.log(`No one wins the trophy!`);
