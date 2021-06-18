'use strict';

let lineCount: number = 6;

// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is


let percent = '%';
let space = ' ';
let reset = '';

let baseline1 ='';
for (let i=0;i<lineCount;i++){
    baseline1+=percent;
}
console.log(baseline1)


let spaces = '';
for (let k = 1;k<lineCount-1;k++){
    for (let j = 1;j<lineCount-3;j++){
        spaces+=space;
    }console.log(percent,spaces,percent);
    spaces = reset;
}



// let spaces = '';
// let percentages = '';

// for (let i=1;i<lineCount+1;i++){
//     for(let j=0;j<lineCount-i;j++){
//         spaces+=space;
//     }
//     for(let k=0;k<i*2-1;k++){
//         percentages+=percentage;
//     }
//     console.log(spaces+stars);
//     spaces=reset;
//     percentages=reset;
// }





let baseline2 ='';
for (let i=0;i<lineCount;i++){
    baseline2+=percent;
}
console.log(baseline2)

