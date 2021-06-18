'use strict';

// Write a program that calculates the sum and the average from 1 to a given number
// Example input: 5
// Example output: Sum: 15, Average: 3

let inputNumber = 10;
let sum = 0;
let avg = 0;

for (let i = 1 ; i<(inputNumber+1) ; i++){
    sum = sum + i;
    avg = sum/inputNumber;
}
console.log('sum = ',sum);
console.log('avg = ',avg);