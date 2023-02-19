/*Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing 
code that will print a greeting to each user after they log in to a website. Loop through the array,
 and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/
export{}
// Users List
let user = ["Abu Bakkar", "Akmal", "Admin", "Mohsin", "Shahid"];

for (let i = 0; i < user.length; i++) {
    if (user[i] === "Admin") {
        console.warn(`Hi ${user[i]}, would you like to see this status report ?`);
    } else {
        console.warn(`Welcome back ${user[i]}, You logged Again`);
    }
}