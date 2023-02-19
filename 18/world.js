"use strict";
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
exports.__esModule = true;
var myPlaces = ["Bali", "Ekaterina Sazonova ", "Gablenz", "Kulalampur", "Kalam"];
console.warn(myPlaces);
console.warn(myPlaces.slice().sort());
console.warn("checking after sorting in alphabetical order", myPlaces);
console.warn(myPlaces.slice().reverse());
console.warn("checking after sorting in reverse-alphabetical order", myPlaces);
console.warn("order changes", myPlaces.reverse());
console.warn("original order retrieved", myPlaces.reverse());
console.warn(myPlaces.sort());
console.warn(myPlaces.sort().reverse());
console.warn("order of array changed", myPlaces);
