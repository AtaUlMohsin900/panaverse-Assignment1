"use strict";
exports.__esModule = true;
var users = ["Ata Ul Mohsin", "Ali", "Abid", "Admin", "Amjed"];
// Checking list
if (users.length == 0) {
    console.warn('we need new user!');
}
else {
    // Message for users
    for (var i = 0; i < users.length; i++) {
        if (users[i] === "Admin") {
            console.warn("Hi ".concat(users[i], ", would you like to see this status report?"));
        }
        else {
            console.warn("Welcome back ".concat(users[i], ", You logged again"));
        }
    }
}
// Removing list
for (var i = users.length; i > 0; i--) {
    users.pop();
}
console.warn(users);
console.warn('We need new user!');
