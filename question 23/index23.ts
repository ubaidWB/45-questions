// More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more tests. Have at least one True and one 
// False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater
//  than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array
let fName="ubaid";

console.log(`famousName==="ubaid" ? i predict true`)
console.log(fName==="ubaid");
console.log(`fname !=="ubaid"? i predict false`) 
console.log(fName!=="ubaid");

 let name1="UBAID";
 
 console.log(`fname=="ubaid"i predict true`);
 console.log(name1.toLocaleLowerCase());
 console.log(`fname!="UBAID"i predict true`);
 console.log(name1.toUpperCase());

 let numaricNumber=7
 console.log(`numaricnumber==7? i predict true`);
 console.log(numaricNumber===7);
 console.log(`numaricNumber!=7 i predic false`);
 console.log(numaricNumber!==7);
 console.log(`numaricNumber>=7 i predic true`);
 console.log(numaricNumber>=7);
 console.log(`numaricNumber<7 i predic true`);
 console.log(numaricNumber<7);
 console.log(`numaricNumber >7 && <7 ? i predit true`);
 console.log(numaricNumber >=7 && numaricNumber<=7);
 console.log(`numaricNumber >7||numaricNumber<7 i predict true`);
console.log(numaricNumber >7 || numaricNumber <7);


let numArray=[2,7,4,8,9,100];
console.log(`numArray include 8 ?i predit true`);
console.log(numArray.includes(8));
console.log(`numArray.include 6 ?i predit false`);
console.log(numArray.includes(6));