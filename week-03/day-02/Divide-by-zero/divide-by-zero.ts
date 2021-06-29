'use strict';

// Create a function that divides number 10
// by a number that's passed as a paramater and prints the result.
// It should print "fail" if the parameter is 0

let divider = 0;

let divideFunc = (divider:number) => {
    if (divider!==0){
        console.log(10/divider);
    } else console.log('fail');
}

divideFunc(divider);