/*More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.
• Start with your program from Exercise
15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
var myGuests = ["Bilal", "Ata Ul Mohsin", "Akmal", "Abu Bakkar"];
for (var i = 0; i < myGuests.length; i++) {
    console.warn("AOA ".concat(myGuests[i], ", I would like to invite you for dinner."));
}
console.warn("".concat(myGuests[3], " He cannot make it to dinner"));
myGuests[3] = 'Shabbir Ali';
console.warn(' We have found a bigger dinner table. So we will invite more people for dinner');
myGuests.unshift("Amjed");
myGuests.splice(myGuests.length / 2, 0, "Nouman");
myGuests.push("Faysal");
for (var i = 0; i < myGuests.length; i++) {
    console.warn("Hi ".concat(myGuests[i], ", I would like to invite you for dinner."));
}
