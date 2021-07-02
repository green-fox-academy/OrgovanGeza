'use strict';
export { }

//Given a string, compute recursively (no loops) a new string where all the lowercase 'x' chars have been changed to 'y' chars.

let stringie: string = 'xxxXXXxxx';

let xReplacer = (string: string): string => {
    let changedString = string;
    if (changedString.replace('x', 'y') === changedString) {
        return changedString;
    } else {
        changedString = string.replace('x', 'y');
        string = changedString;
        return changedString = xReplacer(string);
    }
}

console.log(xReplacer(stringie));