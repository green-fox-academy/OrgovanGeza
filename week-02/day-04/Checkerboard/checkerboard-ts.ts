'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern


let size = 10;

for (let i=0;i<canvas.height/size;i++){
    for (let j = 0; j<canvas.width/size;j++){
        if (i%2===0){
            if (j%2===0){
                ctx.strokeRect(j*size,i*size,size,size)
            } else {
                ctx.fillRect(j*size,i*size,size,size)
            }
        }else {
            if (j%2===0){
                ctx.fillRect(j*size,i*size,size,size)
            } else {
                ctx.strokeRect(j*size,i*size,size,size)
            }
        }
    }
}