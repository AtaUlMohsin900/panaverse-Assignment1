/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a
message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
 and a shirt of any size with a different message.*/
// Function 
function make_shirt(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = "I love Type Script"; }
    console.warn("The size of the shirt is ".concat(size, " and message is ").concat(text));
}
// Large Size  text
make_shirt();
// Medium Siz text
make_shirt("medium");
// Small size text
make_shirt("Small", "Don't repeat yourself");
