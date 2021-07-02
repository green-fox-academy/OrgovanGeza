'use strict';
export { }

let stringie: string = 'xxxXXXxxx';

let xReplacer = (string: string): string => {
    let changedString = string;
    if (changedString.replace('x', '') === changedString) {
        return changedString;
    } else {
        changedString = string.replace('x', '');
        string = changedString;
        return changedString = xReplacer(string);
    }
}

console.log(xReplacer(stringie));