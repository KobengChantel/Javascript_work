
//Initializes an empty array called myWork which will hold the objects representing lessons.
const myWork = [];

//loop iterates from 1 up to 9 (inclusive). It loops through 9 iterations, as indicated by x < 10.
for (let x = 1; x < 10; x++) {
   
    //Calculates the status of the lesson based on whether the current value of x is even or odd. If x % 2 evaluates to 1 (true), indicating x is odd, stat is set to true, otherwise, it's set to false. This line essentially alternates between setting stat to true and false based on whether x is odd or even.
    let stat = x % 2 ? true : false;
    let temp = {
        name: `Lesson ${x}`, status: stat
    };
    
    //Pushes the temp object representing the current lesson into the myWork array.
    myWork.push(temp);
}
//is used to output the array of lesson objects to the console.
console.log(myWork);
//So, the result is an array of lesson objects, where each lesson has a name in the format "Lesson x" and a status that alternates between true and false based on whether the lesson number is odd or even.





for (let x = 1; x < 10; x++) { 
    let stat = x % 2 ? true : false;
    let temp = {
        name: `Lesson ${x}`, status: stat
    };
    myWork.push(temp);
}
console.log(myWork);