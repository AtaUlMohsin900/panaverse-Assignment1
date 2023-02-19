"use strict";
exports.__esModule = true;
var myName = "khalid";
var myAge = 32;
var myArray = ["khalid", 32];
var myObject = {
    name: "khalid",
    age: 32
};
var myBoolean = true;
var myUndefined = undefined;
var myNull = null;
// check
console.warn(myName === "khlaid"); //  true
console.warn(myAge >= 30); //  false
console.warn(myAge === myAge); //  true
console.warn(myAge === 50); //  false
console.warn(myName.toLowerCase() === "khalid"); // true
console.warn(myName == 'Khalid' && myAge == 32); // true
console.warn(myName === 'KHALID' || myAge === 31); //  false
console.warn("Item is Available in Array", myArray.includes("khalid")); //  true
console.warn("Item is not Available in Array", myArray.includes("umer")); // false
