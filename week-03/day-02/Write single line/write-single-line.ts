'use strict';
export{}

// Write a function that is able to manipulate a file
// by writing your name into it as a single line.
// The file should be named "my-file.txt".
// In case the program is unable to write the file,
// it should print the following error message: "Unable to write file: my-file.txt".

import fs from 'fs';

function nameWriter (filename:string){
    try{
    let name = 'Orgován Géza';
    fs.writeFileSync(filename,name)
    } catch(error){
        console.log(`Unable to write file: ${filename}`);
    }
}

nameWriter('my-file.txt');