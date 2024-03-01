//What value is output into the console?
let val = 10;
function tester(val){
 val += 10;
 if(val < 100){
 return tester(val);
 }
 return val;
}
tester(val);
console.log(val);
//answer 10

//What will be output into the console by the below code?
let testFunction = function(){
 console.log("Hello");
}();

//answer Hello
3. //What will be output to the console?
(function () {
  console.log("Welcome");
 })();
 (function () {
  let firstName = "Laurence";
 })();
 let result = (function () {
  let firstName = "Laurence";
  return firstName;
 })();
 console.log(result);
 (function (firstName) {
  console.log("My Name is " + firstName);
 })("Laurence");

 //answer
 Welcome 
 Laurance 
 My name is Laurance
// What will be output to the console?
let test2 = (num) => num + 5;
console.log(test2(14));

19

// What will be output to the console?
var addFive1 = function addFive1(num) {
return num + 2;
};
let addFive2 = (num) => num + 2;
console.log(addFive1(14))
16