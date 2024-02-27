//Age Prompt
  
       //a prompt to ask the user's age
let age = prompt("How old are you?"); 
 //Convert the response from the prompt to a numbe
 age = Number(age);
 // Declare a message variable  message for user
 let message;
 if (age >= 21)  {
message = "You are allowed to enter the venue and purchase alcohol";
 }else if (age >= 19) { 
message ="You are allowed to enter the venue BUT you are not allowed to buy alcohol";
 } else  {
 message ="You are not allowed to enter the venue!";
 }
 console.log(message);
 

