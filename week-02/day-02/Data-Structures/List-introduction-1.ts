'use strict';
export {};

// Create an empty list which will contain names (strings)
// Print out the number of elements in the list
// Add William to the list
// Print out whether the list is empty or not
// Add John to the list
// Add Amanda to the list
// Print out the number of elements in the list
// Print out the 3rd element
// Iterate through the list and print out each name
// Iterate through the list and print:
    // 1. William
    // 2. John
    // 3. Amanda
// Remove the 2nd element
// Iterate through the list in a reversed order and print out each name
// Remove all elements

let names = [];

console.log('number of elements in the list: ', names.length);

names.push('William');

console.log('Is the list empty?' , names.length===0);

names.push('John');
names.push('Amanda');

console.log('number of elements in the list: ', names.length);

console.log(names[2]);

for (let i=0; i<names.length;i++){
    console.log(names[i]);
}

for (let i=0; i<names.length;i++){
    console.log(i+1,'. ',names[i]);
}

for (let i=0; i<names.length;i++){
    if (i!=1){
        names += names.[i];
    }
}
names = (names[1] + names[3]);
console.log(names);