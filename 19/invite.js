/*Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message
indicating the number of people you are inviting to dinner.*/
var myGuests = ["Ata Ul Mohsin", "Abu Bakkar", "Akmal", "Bilal", "Amjed"];
for (var i = 0; i < myGuests.length; i++) {
    console.log("AOA ".concat(myGuests[i], ", you are invited to dinner on sunday "));
}
console.log("We are inviting ".concat(myGuests.length, " guests for dinner"));
