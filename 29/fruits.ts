/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that
check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
export{}
// Fruits List
let favorite_fruits = ["Banana","Mango", "Apple", "Orange", "Grapes"];

// After check Statements fruits available in array

if (favorite_fruits.includes("Banana")) {
    console.warn("I like Banana!")
}
if (favorite_fruits.includes("Mango")) {
    console.warn("I like Mango!")
}
if (favorite_fruits.includes("Apple")) {
    console.warn("I like Apple!")
}
if (favorite_fruits.includes("Orange")) {
    console.warn("I like Orange!")
}
if (favorite_fruits.includes("Grapes")) {
    console.warn("I like Grapes!")
}