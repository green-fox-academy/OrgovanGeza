'use strict';
export{}

// Create a method that decrypts reversed-lines.txt

import fs from 'fs';

function decrypter (input:string,output:string){
    let inputContent = fs.readFileSync(input,'utf-8');
    let previousLineEndIndex = 0;
    let outputContent = '';

    for (let i=0;i<inputContent.length;i++){
        let actualString = inputContent.slice(i,i+1);
        if (actualString !== '\n') continue;
        for (let j=i;j>previousLineEndIndex;j--){
            outputContent+=inputContent[j-1];
        }
        previousLineEndIndex=i+1;
    }
    outputContent = outputContent.slice(1)
    fs.writeFileSync(output,outputContent)
}

decrypter('reversed-lines.txt','normal-lines.txt')