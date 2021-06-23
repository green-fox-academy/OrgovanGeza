'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

let sqAmount = 19;
let sqSize = 10;

for (let i=0; i<sqAmount; i++){
    ctx.fillStyle = "purple"
    ctx.fillRect(sqSize+i*sqSize, sqSize+i*sqSize, sqSize, sqSize)
    ctx.strokeRect(sqSize+i*sqSize, sqSize+i*sqSize, sqSize, sqSize)
}