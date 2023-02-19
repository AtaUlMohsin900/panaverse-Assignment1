/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more
 comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less
than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
export{}
let myName= "khalid";
let myAge = 32;
let myArray  = ["khalid",32];
let myObject = {
    name:"khalid",
    age:32
};
let myBoolean = true;
let myUndefined = undefined;
let myNull = null;




// check
console.warn(myName === "khlaid"); //  true
console.warn(myAge >= 30); //  false
console.warn(myAge === myAge); //  true
console.warn(myAge === 50); //  false


console.warn(myName.toLowerCase() === "khalid"); // true

console.warn(myName == 'Khalid' && myAge == 32) // true
console.warn(myName === 'KHALID' || myAge === 31) //  false



console.warn("Item is Available in Array",myArray.includes("khalid")); //  true
console.warn("Item is not Available in Array",myArray.includes("umer")); // false
