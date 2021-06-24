'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern


let size = 10;

let sqDraver1 = (x:number,y:number,size:number) => { 
    ctx.strokeRect(x*size,y*size,size,size)
}

let sqDraver2 = (x:number,y:number,size:number) => { 
    ctx.fillRect(x*size,y*size,size,size)
}

for (let i=0;i<canvas.height/size;i++){
    for (let j = 0; j<canvas.width/size;j++){
        if (i%2===0){
            if (j%2===0){
                sqDraver1(j,i,size);
            } else {
                sqDraver2(j,i,size);
            }
        }else {
            if (j%2===0){
                sqDraver2(j,i,size);
            } else {
                sqDraver1(j,i,size);
            }
        }
    }
}