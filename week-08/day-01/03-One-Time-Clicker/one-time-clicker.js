//   Create an event listener which logs the current timestamp to the console once the button is clicked.
//   When the button is clicked for the second or any other times no event listener should be called.
//   Try to solve this two different ways.
// hint: take a look at the button attributes https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button

'use strict';

const button = document.getElementsByTagName('button')[0];

console.log(button)

const hujuj = () => {
    let time = Math.floor(Date.now() / 1000);
    console.log(time);
    button.removeEventListener('click', hujuj);
}

const hujuj2 = () => {
    let time = Math.floor(Date.now() / 1000);
    console.log(time);
    button.setAttribute('disabled', 'true');
}

// button.addEventListener('click', hujuj)
button.addEventListener('click', hujuj2)


