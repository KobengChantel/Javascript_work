const theList = ['Laurence', 'Svekis', true, 35, null, undefined, 
{test: 'one', score: 55}, ['one', 'two']]
// Remove the first item and the last item.
theList.pop();
theList.shift();
//adding Add FIRST to the start of the array.
theList.splice(1, 0, "First");
//ssign hello World to the fourth item value.
theList[3] = "hello World";
//Assign MIDDLE to the third index value
theList[2] = "Middle";
//Add LAST to the last position in the array.
theList.push("LAST"); 
// Output it to the console.
console.log(theList);