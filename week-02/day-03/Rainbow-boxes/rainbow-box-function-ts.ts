'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters
// (the square size and the fill color)
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

let colors = ["red","orange","yellow","green","blue","purple","pink"];
let sqSize = (canvas.width>=canvas.height)? canvas.height : canvas.width;

colors.forEach(function(color,i){
    let helpVar = sqSize-(colors.length)*i*(colors.length);
    ctx.fillStyle=color;
    ctx.fillRect((canvas.width-helpVar)/2,(canvas.height-helpVar)/2,helpVar,helpVar)
});
