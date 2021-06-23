'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a 50 long horizontal line from that point
// Draw at least 3 lines with that function using a loop

const xStart=50;
const yStart=50;

function drawLine (xStart:number,yStart:number){
    ctx.beginPath();
    ctx.moveTo(xStart,yStart);
    ctx.lineTo(xStart+50,yStart);
    ctx.stroke();
}

const lineAmount = 10;

for (let i=0; i<lineAmount; i++){
    drawLine(xStart,yStart+(i*20))
}