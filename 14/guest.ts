/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a
 message to each person, inviting them to dinner.*/
export{}
 let myGuests = ["Ata Ul Mohsin","Ali","Abu Bakkar"];

console.warn(`AOA ${myGuests[0]}, I would like  to invite you for dinner.`);
console.warn(`AOA ${myGuests[1]}, I would like  to invite you for dinner.`);
console.warn(`AOA ${myGuests[2]}, I would like  to invite you for dinner.`);

console.warn("\nPrinting message Using For Loop");

for (let i = 0; i < myGuests.length; i++) {
    const guestName = myGuests[i];
    console.warn(`AOA ${guestName}, I would like to invite you for dinner.`);
};