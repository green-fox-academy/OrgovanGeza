'use strict';

let massInKg: number = 81.2;
let heightInM: number = 1.78;

// Print the Body mass index (BMI) based on these values

console.log('BMI= ', massInKg/(heightInM ** 2));
console.log('using the "Math.pow" formula:')
console.log('BMI= ', massInKg/Math.pow(heightInM,2)); //same result