// Define a function named showNames
function showNames() {
    // Initialize a variable to store the last argument
    let lastOne = "";

    // Loop through all the arguments passed to the function
    for (let i = 0; i < arguments.length; i++) {
        // Assign each argument to the variable lastOne in each iteration
        lastOne = arguments[i];
    }

    // Return the last argument
    return lastOne;
}

// Call the showNames function with multiple arguments and log the result to the console
console.log(showNames("JavaScript", "Laurence", "Mike", "Larry"));

