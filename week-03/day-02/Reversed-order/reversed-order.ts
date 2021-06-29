'use strict';
export{}

// Create a method that decrypts reversed-order.txt

import fs from 'fs';

let outputContent = '';
let finalContent='';

function lineOrderChanger (input:string){
    let inputContent = fs.readFileSync(input,'utf-8');
    let previousLineEndIndex = 0;
    for (let i=0;i<inputContent.length;i++){
        let actualString = inputContent.slice(i,i+1);
        if (actualString !== '\n') continue;
        for (let j=i;j>previousLineEndIndex;j--){
            outputContent+=inputContent[j-1];
        }
        previousLineEndIndex=i+1;
    }
    outputContent = outputContent.slice(1);
}

function finalizer (input:string){
    for (let i=input.length; i>=0; i--){
        finalContent+=outputContent[i];
    }
    finalContent.replace("'n\'",'\n');
}

lineOrderChanger('reversed-order.txt')
finalizer(outputContent)
fs.writeFileSync('normal-order.txt',finalContent)