"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space
//  for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
//  print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// 
// • Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of your program.
let guestliwss = ["owais", "fassi", "faraz", "taha"];
guestliwss.unshift("ubaid");
guestliwss.splice(2, 0, "khalid");
guestliwss.push("azan");
console.log(guestliwss[0]);
console.log(guestliwss[1]);
console.log(guestliwss[2]);
console.log(guestliwss[3]);
console.log(guestliwss[4]);
console.log(guestliwss[5]);
console.log(guestliwss[6]);
console.log('you can invite only two people for dinner.');
let mes = guestliwss.pop();
console.log(`Mr. ${mes}, i am sorry you are not invited to dinner.`);
let messs = guestliwss.pop();
console.log(`${messs}, i am sorry you are not invite  to dinner.`);
let messsa = guestliwss.pop();
console.log(`${messsa},i am  sorry you not invite  to dinner.`);
let messsaa = guestliwss.pop();
console.log(`${messsaa},i am   sorry you not invite to dinner.`);
let messsaaa = guestliwss.pop();
console.log(`${messsaaa},i am  sorry you not invite  to dinner.`);
console.log(`${guestliwss},you are still in the list and you are invited for dinner`);
guestliwss.pop();
guestliwss.pop();
console.log(guestliwss);
