// Define an array myList containing objects with name and status properties
let myList = [
    {
        "name": "Learn JavaScript",
        "status": true
    },
    {
        "name": "Try JSON",
        "status": false
    }
];

// Convert the myList array to a JSON string
const newStr = JSON.stringify(myList);

// Parse the JSON string back into an array of objects
const newObj = JSON.parse(newStr);

// Iterate over each element (object) in the newObj array using forEach method
newObj.forEach((el) => {
    // Log each element to the console
    console.log(el);
});
