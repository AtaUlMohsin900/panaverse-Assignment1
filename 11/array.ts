// Names: Store the names of a few of your friends in a array called names. 
// Print each person’s name by accessing each element in the list, one at a time.

var myFriends = ["Abu Bakkar", "Ata Ul Mohsin", "Umer", "Bilal","Akmal"];


console.log(myFriends[0]);
console.log(myFriends[1]);
console.log(myFriends[2]);
console.log(myFriends[3]);
console.log(myFriends[4]);

console.log("\nPrinting names Using For Loop");

for (let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i]);
}