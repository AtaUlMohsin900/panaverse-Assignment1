"use strict";
exports.__esModule = true;
var myGuests = ["Ata Ul Mohsin", "Ali", "Abu Bakkar"];
// using Console.log() to execute the program manually
console.warn("AOA ".concat(myGuests[0], ", I would like  to invite you for dinner."));
console.warn("AOA ".concat(myGuests[1], ", I would like  to invite you for dinner."));
console.warn("AOA ".concat(myGuests[2], ", I would like  to invite you for dinner."));
// using For Loop to execute program at once for each index in array
console.warn("\nPrinting message Using For Loop");
for (var i = 0; i < myGuests.length; i++) {
    var guestName = myGuests[i];
    console.warn("AOA ".concat(guestName, ", I would like to invite you for dinner."));
}
;
