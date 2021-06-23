'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};


let x = 10;
const y = 10;
const width = 50;
const height = 100;

// Draw a rectangle
ctx.fillRect(x, y, width, height);
ctx.fillRect(70, 10, width, height);

//repeat the rects 5 times
//have 10px space between them
const space = 10;
for (let i =0; i <5; i++) {
    ctx.fillRect(x, y, width, height);
    x+=(space+width);
}

// Draw a colored rectangle
ctx.fillStyle = 'red';
ctx.fillRect(110, 110, 100, 100);


// Draw a line
ctx.beginPath();
ctx.moveTo(210, 210);
ctx.lineTo(300, 300);
ctx.stroke();

// Draw a colored line
ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(310, 310);
ctx.lineTo(400, 400);
ctx.stroke();

// Draw a circle
ctx.beginPath();
ctx.arc(500, 500, 50, 0, Math.PI * 2);
ctx.stroke();