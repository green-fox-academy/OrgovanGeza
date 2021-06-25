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

let lineAmount = 15

let axes = (canvas.width>canvas.height) ? canvas.height : canvas.width;
let steps = Math.ceil(axes/lineAmount)/2
let midpointY = canvas.height/2

const xStart1 = canvas.width/2
const yStart1 = (canvas.width>=canvas.height) ? 0 : (canvas.height-canvas.width)/2;
const xStart3 = canvas.width/2
const yStart3 = (canvas.width>=canvas.height) ? canvas.height : canvas.height-(canvas.height-canvas.width)/2;


//1st quarter:
ctx.beginPath();
ctx.strokeStyle="green"

for (let i=0;i<=lineAmount-1;i++){
    ctx.moveTo(xStart1+steps*(i+1),midpointY)
    ctx.lineTo(xStart1,yStart1+i*steps);
}
ctx.stroke();


//2nd quarter:
ctx.beginPath();
ctx.strokeStyle="green"

for (let i=0;i<=lineAmount-1;i++){
    ctx.moveTo(xStart3+steps*(i+1),midpointY)
    ctx.lineTo(xStart3,yStart3-i*steps);
}
ctx.stroke();


//3rd quarter:
ctx.beginPath();
ctx.strokeStyle="green"

for (let i=0;i<=lineAmount-1;i++){
    ctx.moveTo(xStart3-steps*(i+1),midpointY)
    ctx.lineTo(xStart3,yStart3-i*steps);
}
ctx.stroke();


//4th quarter:
ctx.beginPath();
ctx.strokeStyle="green"

for (let i=0;i<=lineAmount-1;i++){
    ctx.moveTo(xStart1-steps*(i+1),midpointY)
    ctx.lineTo(xStart1,yStart1+i*steps);
}
ctx.stroke();
