/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for 
the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only 
two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a 
name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
actually have an empty list at the end of your program.*/

var myGuests = ["Akmal", "Bilal", "Ata Ul MOhsin", "Abu Bakkar"];

for (let i = 0; i < myGuests.length; i++) {
    console.warn(`AOA ${myGuests[i]}, I would like to invite you for dinner.`);
}


console.warn(`${myGuests[3]} He cannot make it to dinner`);


myGuests[3] = 'Shabbir Ali';



console.warn('We have found a bigger dinner table. So we will invite more people for dinner');
myGuests.unshift("Jawad ");

myGuests.splice(myGuests.length / 2, 0, "Amjed");
myGuests.push("Ali");


myGuests.pop()


for (let i = myGuests.length - 1; i > 1; i--) {
    console.warn(`Hi, ${myGuests[i]}, We are very sorry for inform you that you cannot attend the dinner`);
    myGuests.pop();}

for (let i = 0; i < myGuests.length; i++) {
    console.warn(`Hi ${myGuests[i]}, I would like to invite you for dinner.`);
}


myGuests.pop()
myGuests.pop()

console.warn(myGuests);
