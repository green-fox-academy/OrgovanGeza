'use strict';

let lineCount: number = 15;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let star = "*";
let space = ' ';

let spaces='';
let stars = '';

let reset = '';

for (let i=1;i<lineCount/2;i++){
    for(let j=0;j<lineCount/2-i;j++){
        spaces+=space;
    }
    for(let k=0;k<i*2-1;k++){
        stars+=star;
    }
    console.log(spaces+stars);
    spaces=reset;
    stars=reset;
}

let midline ='';
for (let m=0;m<lineCount;m++){
    midline+='*';
}
console.log(midline)

let spaces2='';
let stars2 = '';
for (let i=1;i<lineCount/2;i++){
    for(let j=0;j<lineCount-2*i;j++){
        stars2+=star;
    }
    for(let k=0;k<i;k++){
        spaces2+=space;
    }
    console.log(spaces2+stars2);
    spaces2=reset;
    stars2=reset;
}