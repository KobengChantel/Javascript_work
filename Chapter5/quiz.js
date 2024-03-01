//What is the expected output for the following code?
let step = 3;
for (let i = 0; i < 1000; i += step) {
 if (i > 10) {
 break;
 }
 console.log(i);
}

//answer
// 0, 3,6,9
// loop initialize a variable 'i' to 0. 'i' increment by 3
// if 'i' is >10 the loop will break and the loop will keep printing valuess until 'i'  reaches 10



//What is the final value for myArray, and what is expected in the console?
const myArray = [1,5,7];
for(el in myArray){
 console.log(Number(el));
 el = Number(el) + 5; //add 5 to current element in the array  index1,6
 console.log(el);
}
console.log(myArray);

//answe
5, 1, 7