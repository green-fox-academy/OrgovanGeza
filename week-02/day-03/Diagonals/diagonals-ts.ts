  
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line
// Use this function to draw the canvas' diagonals
// If the line starts from the upper-left corner it should be green, otherwise it should be red
// Make decision about the color in the function


const xStart = 10;
const yStart = 10;

function drawDiagonal (xStart : number, yStart: number){
    ctx.beginPath();
    ctx.strokeStyle = ((xStart==0 && yStart==0) ? "green" : "red");
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xStart+50, yStart+50);
    ctx.stroke();
}

drawDiagonal(xStart,yStart);