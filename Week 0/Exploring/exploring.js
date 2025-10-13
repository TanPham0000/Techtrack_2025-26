/*  The following array contains multiple data types.
    Normalize them by converting them all to numbers using a function
    and log the result in the console */

const data = [1, 2,"3","4",5,];
const numberArray = [];

function convertArrayStringsToNumbers() {
    /* Your code here should convert the data array to an array containing only numbers and no strings 
    and log the result to the console. */
    for (let i = 0; i < data.length; i++) {
    numberArray.push(Number(data[i]));
}}

convertArrayStringsToNumbers()
console.log(numberArray);
// Expected output: [1, 2, 3, 4, 5]