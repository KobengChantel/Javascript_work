//creating a car , adding properties
let myCar = { carName : "Toyota",
model: "AMG",
tires: 6,
doors: 4,
color: "Black",
forSale: true

}
//cereating variable and new color value

let newColor = "color";
myCar[newColor] = "Yellow";
//same variable and assign a new property
newColor = "forSale";
myCar[newColor] = false;
//Output make and model into the console.
console.log(myCar.carName + " " + myCar.model);
//output for sale
console.log(myCar.forSale);
