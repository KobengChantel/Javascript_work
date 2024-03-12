// Initialize a variable val with value 5
let val = 5;

// Add the result of calling the adder function to val, and assign the result back to val
val += adder();
// Add the result of calling the adder function to val again, and assign the result back to val
val += adder();
// Add the result of calling the adder function to val again, and assign the result back to val
val += adder();

// Log the final value of val to the console
console.log(val);

// Define the adder function
function adder() {
    // Initialize a variable counter with the value of val
    let counter = val;

    // Loop from 0 to val (inclusive)
    for (let i = 0; i < val; i++) {
        // Increment the counter by 1 in each iteration
        counter++;
    }

    // Return the value of counter
    return counter;
}
