//IIFE to create a few immediately invoked functions

let val = "1000";

(function () {
    let val = "100"; // local scope variable
    console.log(val);
})();
// returns a value ("Laurence"). This returned value is stored in the variable result.
let result = (function () {
    let val = "Laurence";
    return val;
})();

console.log(result);
console.log(val);
// When invoking this function, "Laurence" is passed as an argument. Inside the function, it logs a message containing the value of val, resulting in "My name is Laurence" being logged to the console.
(function (val) {
    console.log(`My name is ${val}`);
})("Laurence");
