/*  The following array contains multiple elements.
    create one String with all the elements of the Array and log it to the console */

const data = [
    "HTML",
    "CSS",
    "XML",
    "JSON",
    "Javascript"
]

function convertToString() {
    /* Your code here should return to the console one String containing all the elements of array data . */
    let result = "";
    // for (let i = 0; i < data.length; i++) {
    //     result = result + " " + data[i];
    // }
    //data.forEach(element => result += " " + element);

    //data.forEach(taal => console.log(taal));

    data.forEach(taal => result = result + taal + " ");
    

    //result = ""
    //"HTML "
    //"CSS HTML "
    //"XML CSS HTML "
    
    console.log(result);
}

convertToString()