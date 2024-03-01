//Set timeout order

// one, two, three, and four are arrow functions that each log a specific string to the console.
// three calls both one and two when executed.
// four logs 'four' to the console, schedules one to be called asynchronously using setTimeout, and then calls three.



const one  = ()=> console.log('one'); 
const two  = ()=> console.log('two'); 
const three = () =>{
    console.log('three'); 
    one(); 
    two(); 
}
const four = () =>{
    console.log('four');  
    setTimeout(one,0); 
    three();
}
//unction is invoked, which starts the execution of the code.
four();
