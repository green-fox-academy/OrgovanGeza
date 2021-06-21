'use strict';
export {};

// -  Create a variable named `names` with the following content:
//   `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `names`

let names = ["Arthur", "Boe", "Chloe"];

let tempVar = names[0];

names.splice(0,1,names[2])
names.splice(2,1,tempVar)

console.log(names);

