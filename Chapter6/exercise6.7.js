//countdown loop


// initial value of 10. This variable will be used as the starting point for the loops.
let start = 10; 
// The loop1 function takes a parameter val, which represents the current value being logged.
// It first logs the current value of val to the console.
// Then, it checks if val is less than 1. If val is less than 1, it means the loop should stop, so the function returns.
// Otherwise, it recursively calls itself with the decremen
function loop1(val) { 
    console.log(val); 
    if (val < 1) { 
        return; 
    } 
    return loop1(val - 1); 
} 
//nitiates the recursive process, logging numbers from start down to 1.
loop1(start);



//The loop2 function is similar to loop1, but it decrements val inside the if condition.
// It logs the current value of val to the console.
// Then, it checks if val is greater than 0. If val is greater than 0, it decrements val by 1 and recursively calls itself with the decremented value.
// If val is not greater than 0, the function returns.
function loop2(val) { 
    console.log(val); 
    if (val > 0) { 
        val--; 
        return loop2(val); 
    } 
    return; 
} 
//this initiates the recursive process, logging numbers from start down to 1.
loop2(start);
