'use strict';
export {};

// -  Create a variable named `numbers`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements of `numbers`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numbers`

let numbers = [3, 4, 5, 6, 7];

let revNumbers=numbers.reverse()
console.log(revNumbers);

//loop method:

// let tempArray:number[]=[];

// let revNumbers2=numbers.forAll(function(a,i){
//     for (let i=numbers.length+1;i=0;i--){
//         tempArray+=a;
//     }
// });
// console.log(tempArray);
