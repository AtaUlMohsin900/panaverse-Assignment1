"use strict";
exports.__esModule = true;
var age = 46;
if (age < 2) {
    console.warn('The person is a baby');
}
else if (age >= 2 && age < 4) {
    console.warn('The person is a toddler');
}
else if (age >= 4 && age < 13) {
    console.warn('the person is a kid');
}
else if (age >= 13 && age < 20) {
    console.warn('The person is a teenager');
}
else if (age >= 20 && age < 65) {
    console.warn('The person is a adult');
}
else {
    console.warn('The person is a elder');
}
