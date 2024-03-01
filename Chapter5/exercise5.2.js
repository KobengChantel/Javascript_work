//a do-while loop to print out values of counter incremented by step until counter exceeds 100.

// Initializes a variable counter to 0.
let counter = 0;
// - Initializes another variable step to 5. This indicates the amount by which counter will be incremented in each iteration of the loop
let step = 5;
// - Initializes another variable step to 5. This indicates the amount by which counter will be incremented in each iteration of the loop
do {
    //Prints the current value of counter to the console.
    console.log(counter);
    // Increments the value of counter by step. In this case, it increases counter by 5 in each iteration.
    counter += step;
}
//This is the condition for the do-while loop. It specifies that the loop will continue as long as counter is less than or equal to 100.
while (counter <= 100); 

//So, the code will repeatedly print values of counter incremented by step (5) until counter exceeds 100. Since counter starts at 0 and is incremented by 5 in each iteration, it will print the numbers 0, 5, 10, 15, ..., 100. After reaching 100, the loop will terminate.




// let counter = 0;
// let step = 5;
// do {
//     console.log(counter);
//     counter += step;
// }
// while (counter <= 100);