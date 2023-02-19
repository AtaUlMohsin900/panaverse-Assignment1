"use strict";
exports.__esModule = true;
// Users List
var user = ["Abu Bakkar", "Akmal", "Admin", "Mohsin", "Shahid"];
for (var i = 0; i < user.length; i++) {
    if (user[i] === "Admin") {
        console.warn("Hi ".concat(user[i], ", would you like to see this status report ?"));
    }
    else {
        console.warn("Welcome back ".concat(user[i], ", You logged Again"));
    }
}
