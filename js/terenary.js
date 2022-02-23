console.log("terenary");

let gender = "male";
let ats;

if (gender === "male") {
  ats = "vyras";
} else {
  ats = "moteris";
}

//ternary operator
//condition ? JEI TRUE : JEI FALSE
// gender === "male" ? (ats = "vyras") : (ats = "moteris");

ats = gender === "male" ? "vyras" : "moteris";
// ats = gender === "male" ? "" : "moteris";
// ats = gender === "male" ? "vyras" : "";

console.log(`Jus esate ${ats}`);

//susikurti boolean kintamaji isItRaining

//1//
//parasyti su ternary operatorium atspauzdinam ar parasom ar dabar lyja arba dabar giedra

let isItRaining = true;

isItRaining === true ? console.log("dabar lyja") : console.log("dabar giedra");

//2//
// susikurti buildingArea kintamaji
// ternary operator
// jei reikme didene nei 500 tai atspausdinam "large building"
// jei reikme mazesne nei 500 tai atspausdinam "medium building"

let buildingArea = 600;
let size = buildingArea > 500 ? "large" : "medium";
console.log(`this building is ${size}`);
