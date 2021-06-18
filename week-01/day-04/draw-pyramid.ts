let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let star = "*";
let space = ' ';

let spaces = '';
let stars = '';

let reset = '';

for (let i=1;i<lineCount+1;i++){
    for(let j=0;j<lineCount-i;j++){
        spaces+=space;
    }
    for(let k=0;k<i*2-1;k++){
        stars+=star;
    }
    console.log(spaces+stars);
    spaces=reset;
    stars=reset;
}