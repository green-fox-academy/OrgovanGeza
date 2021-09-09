'use strict';

const listElements = document.getElementsByTagName('li');
const button = document.getElementsByTagName('button');

button[0].addEventListener('click', () => {
    document.getElementsByClassName('result')[0].innerHTML = listElements.length;
})


    // On the click of the button,
    // Count the items in the list
    // And display the result in the result element.
