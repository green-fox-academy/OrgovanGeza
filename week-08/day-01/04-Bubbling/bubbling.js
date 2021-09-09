//   Here is an image inspector, but the buttons are not implemented yet, that will
//   be your task!
//    - the nav buttons (up, down, left, right) move the background by 10px
//    - the zoom buttons increase/decrease the image by 20%
//    - attach only two event listeners to the nav element
//      - one for navigation
//      - one for zooming

'use strict';

const nav = document.getElementsByTagName('nav')[0];

const imgInspector = document.querySelector('.img-inspector');
console.log(imgInspector);

const bttnAttrs=[];

const ize = document.getElementsByTagName('button')

for (let i=0; i<document.getElementsByTagName('button').length; i++){
   bttnAttrs.push(Array.from(document.getElementsByTagName('button'))[i].dataset.direction)
}

console.log(ize)

const functions = {
    up: -10,
    down: 10,
    left: -10,
    right: 10,
    in: 20,
    out: -20
}

console.log(bttnAttrs);

nav.addEventListener('click', (e) => {
    if (e.target.className === 'move'){
        console.log('should move')
        // imgInspector.style.backgroundPositionX = '10px'
        imgInspector.style.backgroundSize = '220%'
        console.log(imgInspector.style.x)
    }
})
