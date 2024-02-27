// Creating an array to hold an inventory of store items
let inventory = [];
//Create three items, each having the properties of name, model, cost, and quantity
let item1 = {name : "Television",
model: "Samsung 55 Crystal UHD 4K CU7000",
cost: 9999,
quantity: 2
}
let item2 = {name : "SABLE PLASMA WITH DRAWER",
model: "SKU SAN006",
cost: 3580,
quantity: 4
}
let item3 = {name : "TWITTER SAGE CURTAIN",
model: "SKU:1-00258",
cost: 949,
quantity: 10
}

//. Add all three objects to the main array using an array method, and then log the inventory array to the console
inventory.push(item1, item2, item3);
console.log(inventory);
// Access the quantity element of your third item, and log it to the console. Experiment by adding and accessing more elements within your data structure.
console.log(inventory[2].quantity);