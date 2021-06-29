'use strict';
export{}

// Write a function that takes a filename as string as a parameter
// and returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');

function numberOfLines (filename: string){
    try{
    let fileContent = fs.readFileSync(filename, 'utf-8');
    let fileLines = fileContent.split('\n');
    console.log(fileLines.length);
    } catch (error){
        console.log(0);
    }
}

numberOfLines ('my-file.txt')