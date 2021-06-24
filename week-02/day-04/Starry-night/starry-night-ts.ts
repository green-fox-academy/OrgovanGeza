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

ctx.fillRect(0,0,canvas.width,canvas.height);


for (let i=1; i<=Math.ceil(Math.random()*10000);i++){
    let a :number = Math.floor(Math.random()*10)/10
    let style = "rgba(128,128,128,"+a+")"
    ctx.fillStyle=style
    ctx.fillRect(Math.floor(Math.random()*canvas.width),Math.floor(Math.random()*canvas.height),3,3)
    console.log(i);
    
}
