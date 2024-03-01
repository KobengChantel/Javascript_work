    //Declares an empty array myTable to hold the multiplication table.
    const myTable = [];
    //Defines the maximum number up to which the multiplication table will be generated. In this case, it's set to 10.
    const numb = 10;
    // Starts a loop from 0 to numb - 1 (in this case, 0 to 9). This loop controls the rows of the multiplication table.
    for (let x = 0; x < numb; x++) {
      // Initializes an empty array temp for each row of the multiplication table.
      const temp = [];
      //Starts a loop from 0 to numb - 1. This loop controls the columns of the multiplication table.
      for (let y = 0; y < numb; y++) {

        //Calculates the product of x and y and pushes it into the temp array, representing one cell of the multiplication table
        temp.push(x * y);
      }
      //After the inner loop completes for each x, the temp array (representing a row of the multiplication table) is pushed into the myTable array.
      myTable.push(temp);
    }
    // Outputs the myTable array as a table in the console. The console.table() function is a convenient way to display  arrays as tables in the console, with each inner array representing a row and each element representing a cell in the table.
    console.table(myTable);

    //In summary, this code dynamically generates a multiplication table up to the specified number (numb) and displays it in tabular form using the console.table() function.




