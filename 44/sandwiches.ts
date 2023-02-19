/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides,
 and it should print a summary of the sandwich that is being ordered. Call the function three times,
  using a different number of arguments each time.*/

  function my_sandwich(...ingredients){
    const sandwich = []
    for(let i=0; i<ingredients.length; i++){
        sandwich.push(ingredients[i])
    }
    return `You order of sandwich is ready: ${sandwich.toString()}`
};

console.warn(my_sandwich("slices", "Swiss Cheese", "Mayonnaise sauce"));
console.warn(my_sandwich("slices", "Cheese slices", "Chilli sauce", "Salt", "Black pepper"));
console.warn(my_sandwich("Ham", "Lettuce","Cucumber", "Olives"));