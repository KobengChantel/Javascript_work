//Ask the user to enter a number and check whether it's greater than, equal to, or less than a dynamic number value in your code. Output the result to the user

let value = prompt("What number?");
value = Number(val);
let num = 100;
let message = "nothing";
if (value > num) {
    message = value + "  was greater than " + num;
} else if (value === num) {
    message = value + "  was equal to " + num;
} else {
    message = value + " is less than " + num;
}
console.log(message);
console.log(message);
