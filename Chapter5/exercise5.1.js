//This JavaScript code is a simple number guessing game where the user has to guess a random number between 1 and 5. 

// Defines the maximum value that the random number can take. In this case, it's set to 5.
const maxNumber = 5;

// Generates a random integer between 1 and maxNumber (inclusive) using Math.random() function. Math.floor() ensures the number is an integer. The generated random number is stored in ranNumber.
const ranNumber = Math.floor(Math.random() * maxNumber) + 1;
//Prints the randomly generated number to the console. This is for debugging purposes and can be removed in a production version.
console.log(ranNumber);

//Initializes a variable answer to false. This variable will be used to control the loop.
let answer = false;


//his is a while loop that continues as long as answer is false. It effectively creates a loop that repeats until the user guesses the correct number.
while (!answer) {

  //Prompts the user to input a guess. The input is stored in the variable guess
  let guess = prompt("Guess a number between 1 and 5");
  guess = Number(guess); // Converts the user's input (which is initially a string) into a number
  
  //Checks if user's guess matches the randomly generated number.If the guess is correct:
//Sets answer to true, indicating the game is over.
//Alerts the user that they guessed correctly along with the correct number.
//Breaks out of the loop using break.
// If the guess is higher than the random number:
// Logs a message to the console indicating that the guess is too high.
// Breaks out of the loop using break.
// If the guess is lower than the random number:
// Alerts the user that their guess is too 
  if (guess === ranNumber) {
    answer = true;
    alert("Correct!" + ranNumber);
    break;
  } else if (guess > ranNumber) {
    console.log("Your answer is too high!");
    break;
  } else {
    alert("Your answer is too low!");
  }
  //This line of code breaks out of the loop after the first iteration, effectively allowing only one guess per game.
  break;
}

//, the user is prompted to guess a number between 1 and 5. They continue guessing until they guess the correct number. After each guess, the program provides feedback on whether the guess was too high or too low. Once the correct number is guessed, the game ends.



//onst maxNumber = 5;

// const ranNumber = Math.floor(Math.random() * maxNumber) + 1;
// console.log(ranNumber);

// let answer = false;



// while (!answer) {
//   let guess = prompt("Guess a number between 1 and 5");
//   guess = Number(guess);
//   if (guess === ranNumber) {
//     answer = true;
//     alert("Correct!" + ranNumber);
//     break;
//   } else if (guess > ranNumber) {
//     console.log("Your answer is too high!");
//     break;
//   } else {
//     alert("Your answer is too low!");
//   }
//   break;
// } 


