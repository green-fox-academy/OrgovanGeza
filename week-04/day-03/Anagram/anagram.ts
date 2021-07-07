'use strict';

export let isAnagram = (string1: string, string2: string): boolean => {
    if (string1.replace(/\s/g, "").length === string2.replace(/\s/g, "").length) {
        let string1Nospace = string1.replace(/\s/g, "");
        let length = string1Nospace.length;
        let tempvar = string2.replace(/\s/g, "");

        for (let i = 0; i < string1Nospace.length; i++) {
            let stringIndex = string2.search(string1Nospace[0]);
            string1Nospace.slice(0);
            tempvar = tempvar.slice(0, stringIndex) + tempvar.slice(stringIndex + 1, tempvar.length);
            length--;
        }
        return length === 0;

    } else {
        return false;
    }
}