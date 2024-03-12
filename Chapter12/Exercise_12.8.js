
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

// Call the reloader function to display the contents of the myList array
reloader();

// Function to display the contents of the myList array
function reloader() {
    // Iterate over each element (object) in the myList array using forEach method
    myList.forEach((el) => {
        // Log the name and status of each element to the console
        console.log(`${el.name} = ${el.status}`);
    });
}
