/*Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.
• Loop through the array.
• Use an if-else chain inside the loop to print the proper ordinal ending for each number.
 Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.*/
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] == 1) {
        console.warn('1st');
    }
    else if (numbers[i] == 2) {
        console.warn('2nd');
    }
    else if (numbers[i] == 3) {
        console.warn('3rd');
    }
    else if (numbers[i] == 4) {
        console.warn('4th');
    }
    else if (numbers[i] == 5) {
        console.warn('5th');
    }
    else if (numbers[i] == 6) {
        console.warn('6th');
    }
    else if (numbers[i] == 7) {
        console.warn('7th');
    }
    else if (numbers[i] == 8) {
        console.warn('8th');
    }
    else if (numbers[i] == 9) {
        console.warn('9th');
    }
}
