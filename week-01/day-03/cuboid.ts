'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let a:number= 3;
let b:number= 4;
let c:number= 5;

console.log('Surface area: ', 2*a*b+2*a*c+2*b*c);
console.log('Volume: ', a*b*c);