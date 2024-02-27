//variable called prize and use a prompt to ask the user to set the alue by selecting a number between 0 and 10
let prize = prompt("Pick a number 0-10");
//Convert the prompt response to a number
prize = Number(prize);
//e output message containing the value "My Selection: "

let output = "My Selection: ";
switch (prize){
    case 0: 
        output += "Gold ";
    case 1:
        output += "Coin ";
        break;
    case 2:
        output += "Big ";
    case 3:
        output += "Box of ";
    case 4:
        output += "Silver ";
    case 5:
        output += "Bricks ";
        break;
    default:
        output += "Sorry Try Again";
}
console.log(output);
