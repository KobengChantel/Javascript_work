// Define a class named "menu"
class menu {
  // Define private fields for price1 and price2 using the "#" prefix
  #price1 = 30;
  #price2 = 13;

  // Constructor method that takes two parameters
  constructor(value1, value2) {
    // Initialize instance variables value1 and value2 with the passed values
    this.value1 = value1;
    this.value2 = value2;
  }

  // Method to calculate the total cost based on the values and prices
  calTotal() {
    // Calculate the total cost using the instance variables and private prices
    return (this.value1 * this.#price1) + (this.value2 * this.#price2);
  }

  // Getter method to retrieve the total cost
  get Total() {
    // Call the total method to calculate and return the total cost
    return this.calTotal();
  }
}

// Create instances of the menu class with different values
const value1 = new menu(2,0);
const value2 = new menu(1,3);
const value3 = new menu(3,2);

// Output the total cost for each instance
console.log(value1.Total);
console.log(value2.Total);
console.log(value3.Total);
