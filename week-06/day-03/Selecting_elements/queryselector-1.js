// 1. store the element that says 'The King' in the 'king' variable.
// console.log it.
// 2. store 'The Businessman' and 'The Lamplighter'
// in the 'businessLamp' variable.
// console.log each of them.
// 3. store 'The King' and 'The Conceited Man'
// in the 'conceitedKing' variable.
// alert them one by one.
// 4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
// in the 'noBusiness' variable.
// console.log each of them.

//1
let king = document.getElementById('b325')
console.log(king);

console.log('------------------');

//2
let businessLamp = document.getElementsByClassName('asteroid big')
for (let e of businessLamp) {
    console.log(e);
}

console.log('------------------');

//3
let conceitedKing = document.querySelectorAll('.container div')
for (let e of conceitedKing) {
    //alert(e);
    console.log(e);
};

console.log('------------------');

//4
/* SOLUTION 1:
let noBusiness = document.querySelectorAll('.asteroid')
noBusiness = [noBusiness[0], noBusiness[1], noBusiness[3]]
*/

//SOLUTION 2:
let noBusiness = document.querySelectorAll('div')

for (let e of noBusiness) {
    console.log(e);
}