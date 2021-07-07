'use strict';

import { isAnagram } from "./anagram";
import test from "tape";

test('we have to see a \'false\' boolean, if they are not the same length', t => {
    t.equal(isAnagram('suns','nus'),false)
    t.end();
});

test('we have to see a \'true\' boolean, if they are anagrams', t => {
    t.equal(isAnagram('race','care'),true)
    t.end();
});

test('we have to see a \'true\' boolean, if we add an empty string', t => {
    t.equal(isAnagram('',''),true)
    t.end();
});

test('we have to see a \'true\' boolean, if we add numbers as strings', t => {
    t.equal(isAnagram('1997','9179'),true)
    t.end();
});

test('we have to see a \'true\' boolean, even if one has more spaces than the other\'', t => {
    t.equal(isAnagram('Kék az ég','Géza kék'),true)
    t.end();
});

test('we have to see a \'true\' boolean, even if we add 2 space and 3 space\'', t => {
    t.equal(isAnagram('  ','   '),true)
    t.end();
});