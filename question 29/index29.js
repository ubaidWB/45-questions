"use strict";
let user = ["ubaid", "owais", "shan", "fasi", "admin"];
for (let i = 0; i < user.length; i++) {
    if (user[i] == "admin") {
        console.log("hello admin, would you like to see report");
    }
    else {
        console.log(`hello ${user[i]}, thank you for log in`);
    }
}
