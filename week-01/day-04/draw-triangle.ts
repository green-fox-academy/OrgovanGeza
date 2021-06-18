'use strict';

let lineCount: number = 20;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let stars = '';
for (let i=0; i<lineCount; i++){
    console.log(stars=stars + '*')
}