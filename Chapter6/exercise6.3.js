
//basic calculator

//Two constants value1 and value2 are declared and assigned the values 3 and 5 respectively.
 const value1 = 3;
 const value2 = 5;
 //operator is going to initialize the string
 let operator = ' + ';
 // function is defined with three parametersare assumed to be numbers, while para3 is assumed to be a string representing the operator.
 function numbers(para1, para2, para3) {

  //f para3 is equal to "+", it prints the sum of para1 and para2 to the console.
//Otherwise, it prints the difference between para1 and para2 to the console.
  if (para3 =="+") {
    console.log(para1 + para2);
  }else{
    console.log(para1 - para2)
  }

 }
 numbers(value1, value2, operator);