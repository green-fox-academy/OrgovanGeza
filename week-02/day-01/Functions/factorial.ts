'use strict';
export {};

// - Create a function called `calculateFactorial()`
//   that returns the factorial of its input

function calculateFactorial(numToFactor : number):number{
    let factor=1;
    for (let i=1;i<=numToFactor;i++){
        factor*=i
    }return factor
}
console.log(calculateFactorial(5));
