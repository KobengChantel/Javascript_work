// Define a class called Person
class Person {
  // Constructor function to initialize the firstname and lastname properties
  constructor(firstname, lastname) {
    this.firstname = firstname; // Set the firstname property to the provided firstname
    this.lastname = lastname; // Set the lastname property to the provided lastname
  }
}

// Create a new instance of the Person class with firstname "Maaike" and lastname "van Putten"
let newP = new Person("Maaike", "van Putten");

// Create a new instance of the Person class with firstname "Lerato" and lastname "Bophelo"
let wenP = new Person("Lerato", "Bophelo");

// Log a message to the console greeting the first person
console.log("Hello", newP.firstname, newP.lastname);

// Log a message to the console greeting the second person
console.log("Hi", wenP.firstname, wenP.lastname);

