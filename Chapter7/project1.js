//employees tracking app

// Define the Employee class
class Employee {
  // Constructor to initialize the employee object with firstname, lastname, and numberofyears
  constructor(firstname, lastname, numberofyears) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.numberofyears = numberofyears;
  }
}

// Create instances of the Employee class
const person1 = new Employee("Lerato", "Malagu", 15);
const person2 = new Employee("Jane", "Moeng", 5);

// Store the instances in an array
const workers = [person1, person2];

// Add a method to the Employee prototype to get details of each employee
Employee.prototype.details = function(){
  return this.firstname + " " + this.lastname + " has worked here " + this.numberofyears + " years";
}

// Iterate through the workers array and log details of each employee
workers.forEach((person) => {
  console.log(person.details());
});

