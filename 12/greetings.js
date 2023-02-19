/*Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s
name, print a message to them. The text of each message should be the same, but each message should
be personalized with the person’s name.*/
var myFriends = ["Abu Bakkar", "Ata Ul Mohsin", "Umer", "Bilal", "Akmal"];
console.warn("Hi ".concat(myFriends[0], ",Whats up guys?"));
console.warn("Hi ".concat(myFriends[1], ",Whats up guys?"));
console.warn("Hi ".concat(myFriends[2], ",Whats up guys?"));
console.warn("Hi ".concat(myFriends[3], ",Whats up guys?"));
console.warn("Hi ".concat(myFriends[4], ",Whats up guys?"));
console.warn("\nPrinting message Using For Loop");
for (var i = 0; i < myFriends.length; i++) {
    console.warn("Hi ".concat(myFriends[i], ", Whats up guys?"));
}
;
