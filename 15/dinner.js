/*Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations.
 You’ll have to think of someone else to invite.*/
 
var myGuests = ["Ata Ul Mohsin", "Umer", "Akmal", "Bilal"];
console.warn("AOA, ".concat(myGuests[0], ", I would like to invite you for dinner"));
console.warn("AOA, ".concat(myGuests[1], ", I would like to invite you for dinner"));
console.warn("AOA, ".concat(myGuests[2], ", I would like to invite you for dinner"));
console.warn("AOA, ".concat(myGuests[3], ", I would like to invite you for dinner"));
console.warn("".concat(myGuests[3], " excused that he cannot make it to dinner"));
myGuests[2] = 'Shabbir Ali';
console.warn("AOA, ".concat(myGuests[0], ", I would like to invite you for dinner"));
console.warn("AOA, ".concat(myGuests[1], ", I would like to invite you for dinner"));
console.warn("AOA, ".concat(myGuests[2], ", I would like to invite you for dinner"));
console.warn("AOA, ".concat(myGuests[3], ", I would like to invite you for dinner"));
