'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let percent = '%';
let space = ' ';
let reset = '';
let lineCount = 8;
let currLine1 = '';
let currLine2 = '';

for (let i=1; i<lineCount+1; i++){
    if (i%2===0){
        let currComb = space+percent;
        for (let j=0;j<lineCount/2;j++){
            currLine1+=currComb;
        }console.log(currLine1);
        currLine1= reset;
    } else {
        let currComb =percent+space;
        for (let j=0;j<lineCount/2;j++){
            currLine2+=currComb;
        }console.log(currLine2);
        currLine2= reset;
    }   
}