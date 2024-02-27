
// variable that gets a random number
const randomNumber = Math.floor(Math.random() * 5);
// a string input to repeat the back the final output
let answer = "Something went wrong";
let question = prompt("Ask me anything");
// use a switch statement to values
switch (randomNumber) {
    case 0:
        answer = "It will work out";
        break;
    case 1:
        answer = "Maybe, maybe not";
        break;
    case 2:
        answer = "Probably not";
        break;
    case 3:
        answer = "Highly likely";
        break;
    default:
        answer = "I don't know about that";
}
let output = "You asked me " + question + ". I think that " + answer;
