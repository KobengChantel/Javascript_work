//Create a recursive function


// A function expression is used to define a function named counter.
// This function takes a parameter i, which represents the current count.
// Inside the function, the value of i is logged to the console.
// It then checks if i is less than 10. If i is less than 10, it recursively calls the counter function with i + 1. This effectively increments i and continues the counting process.
// The function returns undefined when i is not less than 10, indicating the end of the counting process.
const main = function counter(i) {
console.log(i);
if (i < 10) {
    return counter(i + 1);
}
return;
}
//function is invoked with an initial value of 0. This initiates the counting process.
main(0);
