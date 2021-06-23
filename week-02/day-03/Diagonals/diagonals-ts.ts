  
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line
// Use this function to draw the canvas' diagonals
// If the line starts from the upper-left corner it should be green, otherwise it should be red
// Make decision about the color in the function


const xStart = 0;
const yStart = 0;

function drawDiagonal (xStart : number, yStart: number){
    const cornAy = 0;
    const cornBx = canvas.width;
    const cornBy = 0;
    const cornCx = canvas.width;
    const cornAx = 0;
    const cornCy = canvas.height;
    const cornDx = 0;
    const cornDy = canvas.height;

    ctx.beginPath();
    ctx.strokeStyle = ((xStart==0 && yStart==0) ? "green" : "red");
        if (xStart==cornAx && yStart==cornAy){
            ctx.moveTo(cornAx, cornAy);
            ctx.lineTo(cornCx, cornCy);
            ctx.stroke();
        } else if (xStart==cornBx && yStart==cornBy){
            ctx.moveTo(cornBx, cornBy);
            ctx.lineTo(cornDx, cornDy);
            ctx.stroke();
        } else if (xStart==cornCx && yStart==cornCy){
            ctx.moveTo(cornCx, cornCy);
            ctx.lineTo(cornAx, cornAy);
            ctx.stroke();
        } else if (xStart==cornDx && yStart==cornDy){
            ctx.moveTo(cornDx, cornDy);
            ctx.lineTo(cornBx, cornBy);
            ctx.stroke();
        }
}

drawDiagonal(xStart,yStart);