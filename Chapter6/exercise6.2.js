//program that will randomly describe an inputted name


let nameArr =["car", "Mpuni", "house", "good"];
//function will handle the generation of the random phrase.

function name() {
  // function displays message allows the user to input their name
  let userName = prompt("What is your name?");
// ranvaluue is generated by math.random to get a random floating-point number

// then multiplied by the length of the nameArr. Math.floor() is used to round down the result to the nearest integer, ensuring it's a valid index within the array bounds.
let ranValue = Math.floor(Math.random() * nameArr.length);

console.log(nameArr[ranValue] + " " + userName);
}
//initiating the execution of the entire process.
name();