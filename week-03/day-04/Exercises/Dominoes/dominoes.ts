'use strict';

import { Domino } from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2, 4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

let dominoes = initializeDominoes();

/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

// let domino1 = dominoes[0];
// let domino2 = dominoes[1];
// let domino3 = dominoes[2];
// let domino4 = dominoes[3];
// let domino5 = dominoes[4];
// let domino6 = dominoes[5];


// console.log(domino1.values[1]);

// console.log(dominoes[0].values[1]);
// dominoes[1].values[0]


for (let i = 0; i <6; i++) {
    for (let j = 1; j < 6; j++) {
        let tempItem: Domino;

        if (dominoes[i].values[1] === dominoes[j].values[0]) {
            tempItem = dominoes[i+1];
            dominoes[i+1] = dominoes[j];
            dominoes[j] = tempItem;
        }

    }
}


print(dominoes);