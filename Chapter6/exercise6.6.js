//recursion is calculating the factorial.


//parameter nr, which represents the number whose factorial needs to be calculated.
function calcFactorial(nr) { 
  //line logs the current value of nr to the console. It helps us visualize the recursion by showing the sequence of numbers being processed
  console.log(nr);
  // if statement checks if nr is equal to 0, which is the base case for calculating the factorial. If nr is 0, it means we've reached the end of the factorial sequence, and the function returns 1.
  if (nr === 0) { 
      return 1; 
  } 
  //If the base case is not met, the function recursively calls itself with the decremented value of nr, and multiplies the current value of nr with the result of the recursive call. This continues until nr becomes 0
  else { 
      return nr * calcFactorial(--nr); 
  } 
}
// function is called with the argument 4, which calculates the factorial of 4.
console.log(calcFactorial(4));
