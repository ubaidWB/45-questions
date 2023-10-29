// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// 
// • Loop through the array.
// 
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
 let ordinal_number=[1,3,6,8,7,,4,5,2];

 for(let i=0; i<ordinal_number.length;i++){
    if(ordinal_number.sort()[i]===1){
        console.log(`the ordinal number of ${ordinal_number[i]} is 1st`)
    }else if(ordinal_number.sort()[i]===2){
        console.log(`the ordinal number od ${ordinal_number[i]} is 2nd`)
    }
    else if(ordinal_number.sort()[i]===3){
        console.log(`the ordinal number od ${ordinal_number[i]} is 3rd`)
    }
    else if(ordinal_number.sort()[i]===4){
        console.log(`the ordinal number od ${ordinal_number[i]} is 4th`)
    }
    else if(ordinal_number.sort()[i]===5){
        console.log(`the ordinal number od ${ordinal_number[i]} is 5th`)
    }
    else if(ordinal_number.sort()[i]===6){
        console.log(`the ordinal number od ${ordinal_number[i]} is 6th`)
    }
    else if(ordinal_number.sort()[i]===7){
        console.log(`the ordinal number od ${ordinal_number[i]} is 7th`)
    }
    else if(ordinal_number.sort()[i]===8){
        console.log(`the ordinal number od ${ordinal_number[i]} is 8th`)
    }
 }
 console.log(ordinal_number)