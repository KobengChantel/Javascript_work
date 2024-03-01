//This loop iterates over each property (prop) of the object obj.
//For each property, it logs the property name (prop) and its corresponding value (obj[prop]) to the console


const obj = {
  a: 1,
  b: 2,
  c: 3
};

for (let prop in obj) {
  console.log(prop, obj[prop]);
}

//This loop uses a numeric loop to iterate over each index (w) of the array arr.
//For each index, it logs the index (w) and the corresponding element (arr[w]) to the console.

const arr = ["a", "b", "c"];
for (let w = 0; w < arr.length; w++) {
  console.log(w, arr[w]);
}

//This loop uses a for...in loop to iterate over each property (el) of the array arr.
//However, it's important to note that using for...in loop with arrays is generally discouraged because it iterates over all enumerable properties, not just array elements. It may include properties added to the array's prototype chain.
//For each property, it logs the property index (el) and the corresponding element (arr[el]) to the console.//

for (el in arr) {
  console.log(el, arr[el]);
} 
//These loops illustrate different ways to iterate over the properties of an object and the elements of an array in JavaScript. The for...in loop is more suitable for objects, while numeric loops (for loops) are typically used for arrays. Using for...in with arrays can lead to unexpected behavior if the array has additional properties besides its numeric indices.




