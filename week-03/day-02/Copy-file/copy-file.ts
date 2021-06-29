'use strict';
export{}

// Write a function that copies the contents of a file into another file
// It should take two filenames as parameters
// It should return a boolean that shows if the copy was successful

import fs from 'fs'

function fileCopier (copyFrom:string, copyTo:string){
    let success = true;
    try{
    let content = fs.readFileSync(copyFrom);
    fs.writeFileSync(copyTo,content)
    }catch(error){
        success = false;
    }
    return success;
}

console.log(fileCopier('file-to-copy.txt','copied-file.txt'));
