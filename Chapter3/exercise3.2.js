//creating an empty list
let shopList = [];
//adding items to empty list
 shopList.push = ("Milk", "Bread", "Apples");
 //we are replacing bread with banana and eggs
shopList.splice(1, 1, "Bananas", "Eggs")
//removing last item and output in console
const removeLast = shopList.pop();
console.log(removeLast);
//sorting aplpahbetically
shopList.sort();
//finding index of milk and outpt
console.log(shopList.IndexOf("Milk"));
//addind carrot,lettuce after bananas
shopList.splice(1, 0, "Carrots", "Lettuce");
//creating a new list
let newList =["Juice,", "Pop"]
let shoppingLists = shopList.concat  (newList, newList);
console.log(shoppingLists);
//find index for pop
console.log(newList.lastIndexOf("Pop"));
