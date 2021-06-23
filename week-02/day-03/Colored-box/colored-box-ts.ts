  
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge

ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(10, 10);
ctx.lineTo(60, 10);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.moveTo(60, 10);
ctx.lineTo(60, 60);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(60, 60);
ctx.lineTo(10, 60);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'orange';
ctx.moveTo(10, 60);
ctx.lineTo(10, 10);
ctx.stroke();
