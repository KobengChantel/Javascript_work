///This loop populates the array myArray with values from 1 to 10.
//It iterates from 0 to 9 (x < 10), and for each iteration, it pushes the value of x + 1 into the array. This ensures that the array contains numbers from 1 to 10.
const myArray = [];
for (let x = 0; x < 10; x++) {
    myArray.push(x + 1);
}
console.log(myArray);
//This loop iterates over the array myArray using a numeric loop.
//It starts from index 0 (let i = 0), iterates as long as i is less than the length of myArray, and increments i after each iteration (i++).
//Within each iteration, it logs the value of myArray[i] to the console, printing each element of the array.


for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

//This loop uses a for...of loop to iterate directly over the elements of myArray.
//It iterates over each element of myArray, assigning the current element to the variable val.
//Within each iteration, it logs the value of val to the console, printing each element of the array
for (let val of myArray) {
    console.log(val);
}









// const grid = [];
// const cells = 64;
// let counter = 0;
// let row;
// for (let x = 0; x < cells + 1; x++) {
//     if (counter % 8 == 0) {
//         if (row != undefined) {        
//             grid.push(row);
//         }
//         row = [];
//     }
//     counter++;
//     let temp = counter;
//     row.push(temp);
 
// }
// console.table(grid);





