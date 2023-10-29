// Large Shirts: Modify the make_shirt() function so that shirts are large 
// by default with a message that reads I love TypeScript. Make a large shirt
//  and a medium shirt with the default message, and a shirt of any size with a different message.
function shirt(size="large",message="i love typescript"){
    console.log(`you have order the ${size} size shirt whith this ${message} message\n`)
}
 shirt()

shirt("Medium")
shirt("small","i like cats")
