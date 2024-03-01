//Initializes an empty array which will hold the rows of the grid.
const grid = [];
//Defines the total number of cells (elements) the grid will have. In this case, it's set to 64.
const cells = 64;
// Initializes a counter variable to keep track of the current cell number.
let counter = 0;
//Initializes a variable row to store the current row being generated.
let row;
//loop iterates from 0 up to cells + 1. Inside the loop:
for (let x = 0; x < cells + 1; x++) {
 //Checks if the counter is divisible by 8 (which indicates the start of a new row, as each row contains 8 cells). If true, it initializes a new row.
    if (counter % 8 == 0) {
        //Checks if the row variable is defined, meaning it's not the first row. If it's not the first row, it pushes the completed row into the grid array
        if (row != undefined) {        
            grid.push(row);
        }
        // Initializes an empty array for the new row.
        row = [];
    }
    //Increments the counter for each cell.
    counter++;
//Stores the current value of the counter in a temporary variable tempArr.
    let tempArr = counter;
   
    row.push(tempArr);
 
}
// is used to display the grid in a tabular format in the console.
console.table(grid);


//The result is a 2D grid of numbers from 1 to 64, with 8 numbers per row, displayed in the console using console.table().





