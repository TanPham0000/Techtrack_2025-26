/*  The following array contains strings with randomized capitals.
    You're tasked with converting all strings to lowercase with a
    first letter capitalized */

const data = [
    "robert",
    "vincent",
    "lAuRa",
    "Danny",
    "bERRY",
    "rOOs"
];

/* This should the result be:

    const data = [
        "Robert",
        "Vincent",
        "Laura",
        "Danny",
        "Berry",
        "Roos"
    ];

*/


function convertArrayStringsToCapitalized(myData) {
    /* Your code here should convert an array myData to a normalized array ad specified above and return the result*/
    let result = [];
    for (let i = 0; i < myData.length; i++) { // Loop through each string in the input array
        let lowerCased = myData[i].toLowerCase();
        let capitalized = lowerCased.charAt(0).toUpperCase() + lowerCased.slice(1); // Capitalize the first letter and dont touch the rest
        result.push(capitalized); // Add the capitalized string to the result array
    }
    return result;
}

console.log(convertArrayStringsToCapitalized(data))