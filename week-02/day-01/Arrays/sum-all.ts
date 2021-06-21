'use strict';
export {};

  
// -  Create a variable named `numbers` with the following content:
//   `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements of `numbers` to the console

let numbers = [3, 4, 5, 6, 7];
let sumAll=0;

numbers.forEach(function(a) {
    return sumAll+=a;
});
console.log(sumAll);

