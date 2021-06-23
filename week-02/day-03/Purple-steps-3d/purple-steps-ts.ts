'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]


let sqAmount = 5;
let sqSize = 10;
let xy:number=sqSize;

for (let i=0; i<sqAmount; i++){
    ctx.fillStyle = "purple"
    ctx.fillRect(xy, xy, sqSize+sqSize*i, sqSize+sqSize*i)
    ctx.strokeRect(xy, xy, sqSize+sqSize*i, sqSize+sqSize*i)
    xy+=sqSize*2+sqSize*i-sqSize;
}