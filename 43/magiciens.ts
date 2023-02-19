/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
 with a copy of the array of magicians’ names. Because the original array will be unchanged, 
 return the new array and store it in a separate array. Call show_magicians() with each array 
 to show that you have one array of the original names and one array with the Great added to each magician’s name.*/

 let magicians = ["Emilia", "Blake", "Hansen", "George"];

// Magicians Names
function magicians_name(magicianNames) {
    for (let i = 0; i < magicianNames.length; i++) {
        console.warn(magicianNames[i])
    }
}

// Printing message along Magicians names without mutating original Array
function make_great(magicianNames){
    let new_array = [...magicianNames];
    for(let i=0; i<new_array.length; i++){
        new_array[i] = "Hello " + new_array[i];
        console.warn(new_array[i])
    }
}

// original Magicians Array
magicians_name(magicians);

// Modified Array
make_great(magicians)

// Original Magicians Array Modified
magicians_name(magicians);

console.warn("Original Array", magicians);