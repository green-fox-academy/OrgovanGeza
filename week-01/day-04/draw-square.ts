  
'use strict';

let lineCount: number = 20;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
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

let baseline2 ='';
for (let i=0;i<lineCount;i++){
    baseline2+=percent;
}
console.log(baseline2)

