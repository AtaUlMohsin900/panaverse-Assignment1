/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
// Green color
var alien_color = 'green';
if (alien_color == 'green') {
    console.warn("alien Color is ".concat(alien_color, ",You earned 5 points"));
}
else if (alien_color == 'yellow') {
    console.warn("alien Color is not ".concat(alien_color, ",You earned 10 points"));
}
else if (alien_color == 'red') {
    console.warn("alien Color is not ".concat(alien_color, ",You earned 15 points"));
}
else {
    console.warn("alien Color is not Available");
}
;
//  Yellow color
var alien_color = 'yellow';
if (alien_color == 'green') {
    console.warn("alien Color is not ".concat(alien_color, ",You earned 5 points"));
}
else if (alien_color == 'yellow') {
    console.warn("alien Color is ".concat(alien_color, ",You earned 10 points"));
}
else if (alien_color == 'red') {
    console.warn("alien Color is not ".concat(alien_color, ",You earned 15 points"));
}
else {
    console.warn("alien Color is not Available");
}
;
//  Red color
var alien_color = 'red';
if (alien_color == 'green') {
    console.warn("alien Color is not ".concat(alien_color, ",You earned 5 points"));
}
else if (alien_color == 'yellow') {
    console.warn("alien Color is not ".concat(alien_color, ",You earned 10 points"));
}
else if (alien_color == 'red') {
    console.warn("alien Color is ".concat(alien_color, ",You earned 15 points"));
}
else {
    console.warn("alien Color is not Available");
}
;
