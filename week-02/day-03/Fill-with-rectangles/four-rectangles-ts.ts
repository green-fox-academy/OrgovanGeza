  
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles
// Avoid code duplication!
let colors = ["red", "green", "blue", "orange"]

colors.forEach(function(a,i){
    ctx.fillStyle=a;
    ctx.fillRect(i+(i*(i*5+74)),i,i*5+74,i*9+29);
});