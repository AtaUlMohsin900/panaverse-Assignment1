/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.*/
// Magician Names
var magician = ["Tony", "Alsision", "dog", "Jony"];
//  function
show_magicians(magicians);
function show_magician(magicianNames) {
    for (var i = 0; i < magicianNames.length; i++) {
        console.warn(magicianNames[i]);
    }
}
