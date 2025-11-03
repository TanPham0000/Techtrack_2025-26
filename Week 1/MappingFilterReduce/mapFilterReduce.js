const datapersons = [
    {
        name: "robert",
        age: "29",
        residence: "amsterdam",
        siblings: 1,
        work: {
            title: "Lecturer",
            employer: "Hogeschool van Amsterdam"
        }
    },
    {
        name: "berend",
        age: "32",
        residence: "rotterdam",
        siblings: 0,
        work: {
            title: "Front-end Developer",
            employer: "DEPT"
        }
    },
    {
        name: "ubaida",
        age: "26",
        residence: "Amersfoort",
        siblings: 4,
        work: {
            title: "Project Manager",
            employer: "Clarify"
        }
    }
];



/* Filter by age, normalize capitals in names, convert ages to numbers, remove work.
    const data = [
        {
            name: "Robert",
            age: 29,
            siblings: 1,
            residence: "Amsterdam",
        },
        {
            name: "Berend",
            age: 32,
            siblings: 0,
            residence: "Rotterdam",
        }
    ];
*/

// hulpfunctie die objecten uit array data transformeret naar het gewenste formaat
// en het object teruggeeft
function transformPerson(myPerson) {
    return {
        name: myPerson.name.charAt(0).toUpperCase() + myPerson.name.slice(1),
        age: Number(myPerson.age),
        residence: myPerson.residence.charAt(0).toUpperCase() + myPerson.residence.slice(1),
    };
}

// transformeer array data met behulp van de map-functie en sla het resultaat op 
// in varabele transformedData
const transformedData = datapersons.map(transformPerson);
console.log(transformedData.filter(myPerson => myPerson.name === "Berend"));

// toon in de console een array met alle de personen, ouder dan 26
console.log(transformedData.filter(myPerson => myPerson.age > 26));

// laat de som zien van van de broertjes/zusjes van personen, ouder dan 26
console.log(transformedData.map);

// In één statement