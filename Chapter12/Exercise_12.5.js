// Define a function named test that takes a single parameter val
function test(val) {
    try {
        // Check if the provided value is not a number
        if (isNaN(val)) {
            // If it's not a number, throw an error with the message "Not a number"
            throw "Not a number";
        } else {
            // If it's a number, log "Got number" to the console
            console.log("Got number");
        }
    } catch (e) {
        // If an error is caught, log the error message to the console
        console.error(e);
    } finally {
        // Finally, regardless of whether an error occurred or not, log "Done" along with the value of val to the console
        console.log("Done " + val);
    }
}

// Call the test function with a string argument
test("a");
// Call the test function with a number argument
test(100);
