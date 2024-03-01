//Initializes an empty array called myTable which will hold the rows of the grid.
let myTable = [];
//Defines the number of rows the grid will have, in this case, it's set to 5.
let rows = 5;
//Defines the number of columns (or elements per row) the grid will have, in this case, it's set to 6.
let column = 6;
// Initializes a counter variable to keep track of the current value to be inserted into the grid.
let varCounter = 0;
//The outer for loop iterates over each row. It runs rows number of times.
//
for (let y = 0; y < rows; y++) {

  let tempTable = [];

  for (let x = 0; x < column; x++) {
//Increments the counter variable varCounter for each cell
      varCounter++;
//Pushes the current value of the counter into the tempTable, effectively populating each column of the current row with consecutive numbers.
      tempTable.push(varCounter);
  }
  //After the inner loop completes for each row, the populated tempTable array representing a row is pushed into the myTable array.
  myTable.push(tempTable);
}
//Once all rows are populated and added to myTable, console.table(myTable); is used to display the 2D grid in a tabular format in the console.
console.table(myTable);
//So, the result is a 2D grid of numbers from 1 to 30 (5 rows, 6 columns), displayed in the console using console.table().


// const myTable = [];
// const rows = 4;
// const cols = 7;
// let counter = 0;

// for (let y = 0; y < rows; y++) {

//     let tempTable = [];

//     for (let x = 0; x < cols; x++) {
        
//         counter++;
//         tempTable.push(counter);
//     }
//     myTable.push(tempTable);
// }
// console.table(myTable);
