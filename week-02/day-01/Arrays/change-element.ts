'use strict';
export {};

// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the value of the fourth element (8) to 4 with the `.map` method 
// -  Print the fourth element as a test

let numbers = [1, 2, 3, 8, 5, 6];
let inputNum= 4;

let numbers2=numbers.map(function(e,i){
    if (i==3){
         return e=inputNum;
    }else{
        return e=e;
    }
});
console.log(numbers2);
