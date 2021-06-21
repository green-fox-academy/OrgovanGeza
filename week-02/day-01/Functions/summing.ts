'use strict';
export {};

// Write a function called `sum()` that returns the sum of numbers from zero to the given parameter

function sum(parameter:number):number{
    let sumNum=0;
    for (let i=0;i<=parameter;i++){
        sumNum+=i;
    }return sumNum;
}
console.log(sum(5));
