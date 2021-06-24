'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]


let arr1=[[10, 10], [290,  10], [290, 290], [10, 290]];
let arr2=[[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],[120, 100], [85, 130], [50, 100]];

let lineDrawer = (array:number[][]) => {
    ctx.beginPath();
    ctx.strokeStyle="green";
    ctx.moveTo(array[0][0],array[0][1]);

    array.forEach(function(a) {
        ctx.lineTo(a[0],a[1]);
    });
    ctx.lineTo(array[0][0],array[0][1]);
    ctx.stroke();
}

lineDrawer(arr1)
lineDrawer(arr2)