/*Great Magicians: Start with a copy of your program from Exercise 39.
 Write a function called make_great() that modifies the array of magicians by adding the phrase 
 the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/

 // Magicians Names
let magicians = ["wiki", "Joney", "Sharma", "shan"];

function show_magicians(magicianNames) {
    for (let i = 0; i < magicianNames.length; i++) {
        console.warn(magicianNames[i])
    }
}

function make_great(magicianNames) {
    for (let i = 0; i < magicianNames.length; i++) {
        magicianNames[i] = "Hi " + magicianNames[i];
        console.warn("Hi " + magicianNames[i])
    }
}

// Original Magicians Array
show_magicians(magicians);

// Modified Array
make_great(magicians)

// Original Magicians Array Modified
show_magicians(magicians);

console.warn("Original Array Modified", magicians);