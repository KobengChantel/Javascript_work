//Modify the calculator in 6.2

const myArr = [];
 //A for loop is initiated, starting with x at 0, and iterates as long as x is less than 10. In each iteration, x is incremented by 1.
for(let x=0; x<10; x++){
  //
  let val1 = 5 * x;
  let val2 = x * x;
  let res = cal(val1, val2, "+");
  myArr.push(res);
}
console.log(myArr);
//cal function is defined to perform arithmetic operations based on the values of a, b, and op. If op is "-", it subtracts b from a, otherwise, it adds a and b.
function cal(a, b, op) {
  if (op == "-") {
    return a - b;
  } else {
    return a + b;
  }
}
console.log(myArr);