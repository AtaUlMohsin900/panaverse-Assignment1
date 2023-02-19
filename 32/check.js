"use strict";
exports.__esModule = true;
var current_users = ["Mohsin", "Umer", "Majeed", "Rahil", "Akmal"];
var new_users = ["Mohsin", "Umer", "Bilal", "Manzoor", "Bashir"];
for (var i = 0; i < new_users.length; i++) {
    if (new_users.includes(current_users[i])) {
        console.warn("".concat(current_users[i], " This user already used , Please Choose another username"));
    }
    else {
        console.warn("".concat(new_users[i], " User name is available"));
    }
}
