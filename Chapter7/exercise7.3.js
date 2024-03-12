// Define a class named "Animals"
class Animals {
  // Constructor method that takes species and sound parameters
  constructor(species, sound) {
    // Initialize instance variables species and sound with the passed values
    this.species = species;
    this.sound = sound;
  }
}

// Create instances of the Animals class with specific species and sound
let p1 = new Animals("Panthera leo", "roar"); // Instance representing a lion
let bird = new Animals("Aves", "cheep"); // Instance representing a bird

// Define a method commonColor using prototype
Animals.prototype.commonColor = function() {
  // Return a string describing the species, sound, and color
  return this.species + " makes the sound '" + this.sound + "' and is brown."; 
};

// Call the commonColor method on the p1 instance and output the result
console.log(p1.commonColor());
