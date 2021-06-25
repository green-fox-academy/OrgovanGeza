'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

let lineAmount = 10
let axes = (canvas.width>canvas.height) ? canvas.height : canvas.width;
let steps = Math.ceil(axes/lineAmount)/2
let midpointX = canvas.width/2
let midpointY = canvas.height/2

const xStart1 = canvas.width/2
const yStart1 = (canvas.width>=canvas.height) ? 0 : (canvas.height-canvas.width)/2;
// const xStart2 = (canvas.width>=canvas.height) ? (canvas.width-canvas.height)/2 : canvas.width;
// const yStart2 = canvas.height/2
// const xStart3 = canvas.width/2
// const yStart3 = (canvas.width>=canvas.height) ? canvas.height : (canvas.height-canvas.width)/2;
// const xStart4 = (canvas.width>=canvas.height) ? (canvas.width-canvas.height)/2 : 0;
// const yStart4 = canvas.height/2;
// console.log(xStart1);
// console.log(yStart1);
// console.log(xStart2);
// console.log(yStart2);
// console.log(xStart3);
// console.log(yStart3);
// console.log(xStart4);
// console.log(yStart4);


ctx.beginPath();
ctx.strokeStyle="green"
console.log('start x&y: ' , xStart1,yStart1);


for (let i=0;i<=lineAmount-1;i++){
    ctx.moveTo(xStart1+steps*(i+1),midpointY)
    ctx.lineTo(xStart1,yStart1+i*steps);
}
ctx.stroke();