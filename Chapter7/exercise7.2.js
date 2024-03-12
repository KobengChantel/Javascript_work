
  // Define a class called Person
class Person {
  // Constructor function to initialize the object with firstname and lastname properties
  constructor(firstname, lastname) {
    this.firstname = firstname; // Assign the firstname parameter to the firstname property
    this.lastname = lastname; // Assign the lastname parameter to the lastname property
  }

  // Method to concatenate firstname and lastname and return the full name
  fullname() {
    return this.firstname + " " + this.lastname;
  }
}

// Create instances of Person class
let person1 = new Person("Maaike", "van Putten"); // Create a new Person object with firstname "Maaike" and lastname "van Putten"
let person2 = new Person("Laurence", "Svekis"); // Create a new Person object with firstname "Laurence" and lastname "Svekis"

// Print the full names of the created Person objects
console.log(person1.fullname()); // Output: "Maaike van Putten"
console.log(person2.fullname()); // Output: "Laurence Svekis"

  
  