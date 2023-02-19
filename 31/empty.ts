/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/
export{}


let users = ["Ata Ul Mohsin", "Ali", "Abid", "Admin", "Amjed"];

// Checking list
if (users.length == 0) {
    console.warn('we need new user!');
} else {

    // Message for users
    for (let i = 0; i < users.length; i++) {
        if (users[i] === "Admin") {
            console.warn(`Hi ${users[i]}, would you like to see this status report?`);
        } else {
            console.warn(`Welcome back ${users[i]}, You logged again`);
        }
    }
}

// Removing list
for (let i = users.length; i > 0; i--) {
    users.pop();
}
console.warn(users)
console.warn('We need new user!');
