"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15./
//  Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
//  • Print a new set of invitation messages, one for each person in your list.
let guestliws = ["owais", "fassi", "faraz", "taha"];
guestliws.unshift("ubaid");
guestliws.splice(2, 0, "khalid");
guestliws.push("azan");
console.log(guestliws[0], `you are invited in dinner`);
console.log(guestliws[1], `you are invited in dinner`);
console.log(guestliws[2], `you are invited in dinner`);
console.log(guestliws[3], `you are invited in dinner`);
console.log(guestliws[4], `you are invited in dinner`);
console.log(guestliws[5], `you are invited in dinner`);
console.log(guestliws[6], `you are invited in dinner`);
console.log(`people i found a bigger dinner table`);
