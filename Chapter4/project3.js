//array that contains the variables Rock, Paper, and Scissors.
const myArr = ["Rock", "Paper", "Scissors"];
//variable that generates a random number 0-2 for player and computer selection
let computer = Math.floor(Math.random() * 3); 
let player = Math.floor(Math.random() * 3); 
//o hold a response message to the user
let message = "player " + myArr[player] + " vs computer " + myArr[computer] + " "; 
//a condition to handle the player and computer selections If both are the same, this results in a tie
if (player === computer) { 
    message += "it's a tie"; 
    
} else if (player > computer) { 
    if (computer == 0 && player == 2) { 
        message += "Computer Wins"; 
    } else { 
        message += "Player Wins"; 
    } 
} else { 
    if (computer == 2 && player == 0) { 
        message += "Player Wins"; 
    } else { 
        message += "Computer Wins"; 
    } 
} 
console.log(message);

