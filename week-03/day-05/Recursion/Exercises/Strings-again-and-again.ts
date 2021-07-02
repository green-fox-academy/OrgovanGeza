'use strict';
export { }

// Given a string, compute recursively a new string where all the adjacent chars are now separated by a *

let stringie: string = 'xxxXXXxxx';
let strL = stringie.length;

let starInserter = (inpString: string): string => {
    console.log(inpString);

    if (inpString.length === strL+(strL-1)) {
        console.log('here');
        return inpString;
    } else {
        console.log('hereeee');
        inpString = inpString.replace(inpString[inpString.length - 2], inpString[inpString.length - 2] + '*');
        //string = changedString;
        return inpString = starInserter(inpString);
    }
}

console.log(starInserter(stringie));
