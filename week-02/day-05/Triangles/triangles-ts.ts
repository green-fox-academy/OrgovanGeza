'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE


let triangleAmount: number = 10;
let triangleBaseLength = 40;

let Area = 1/2*triangleBaseLength*triangleBaseLength*(Math.sqrt(3)/2)
let height = 2*Area/triangleBaseLength

let triDrawer = (x:number,y:number) => {
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+triangleBaseLength , y);
    ctx.lineTo(x+triangleBaseLength/2 , y-height);
    ctx.lineTo(x,y);
    ctx.stroke();
}

let startX = 0;
let startY = canvas.height;

for (let j=0; j<triangleAmount; j++){
    for (let i=0;i<triangleAmount-j;i++){
        triDrawer(startX,startY);
        startX+=triangleBaseLength
    }
    startY -= height;
    startX = triangleBaseLength/2*(j+1)
}
