'use strict';
export {};

let example: string = 'In a dishwasher far far away';

// I would like to replace "dishwasher" with "galaxy" in this example variable, but it has a problem
// Please fix it for me!
// Expected ouput: In a galaxy far far away

let stringToReplace='dishwasher'; 
let stringToReplaceTo='galaxy';

example = example.replace(stringToReplace,stringToReplaceTo);

console.log(example);

export = example;
