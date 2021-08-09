'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

const fruits = ['apple', 'pear', 'melon', 'grapes'];
let currentFruitIndex = 0;

let fruitsIterator = (array) => {
    let currFruit = array[currentFruitIndex];
    currentFruitIndex++;
    return currFruit;
}

const printing0 = (callback) => {
    console.log(callback);
}

const printing1 = (callback) => {
    setTimeout(() => console.log(callback), 1000);
}
const printing2 = (callback) => {
    setTimeout(() => console.log(callback), 3000);
}
const printing3 = (callback) => {
    setTimeout(() => console.log(callback), 5000);
}


printing0(fruitsIterator(fruits));
printing1(fruitsIterator(fruits));
printing2(fruitsIterator(fruits));
printing3(fruitsIterator(fruits));