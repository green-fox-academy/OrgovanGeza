'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a line from that point to the center of the canvas
// Fill the canvas with lines from the edges (every 20 px) to the center


let lineDrawer = (x:number , y:number) => {
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(canvas.width/2, canvas.height/2);
    ctx.stroke()
}

for (let i=0;i<canvas.width;i+=20){
    lineDrawer(i,0) 
}
for (let i=0;i<canvas.width;i+=20){
    lineDrawer(i,canvas.height) 
}
for (let i=0;i<canvas.height;i+=20){
    lineDrawer(0,i) 
}
for (let i=0;i<canvas.height+1;i+=20){
    lineDrawer(canvas.width,i) 
}