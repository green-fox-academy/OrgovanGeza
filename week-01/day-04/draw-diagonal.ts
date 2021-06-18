'use strict';

let lineCount: number = 9;

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
let spaceCount = 0;


let baseline1 ='';
for (let i=0;i<lineCount;i++){
    baseline1+=percent;
}
console.log(baseline1)

for (let i = 0; i < lineCount-2; i++) {
    let line = "";
    line += percent;
    for (let j = 0; j < spaceCount; j++) {
        line += space;
    }
    line += percent;
    for (let j = 0; j < lineCount - 3 - spaceCount; j++) {
        line += space;
    }
    line += percent;
    spaceCount++;
    console.log(line);
}


let baseline2 ='';
for (let i=0;i<lineCount;i++){
    baseline2+=percent;
}
console.log(baseline2)