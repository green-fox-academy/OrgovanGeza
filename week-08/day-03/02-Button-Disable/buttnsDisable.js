'use strict';

let form = document.forms[0];
let catsBttn = document.getElementById('cats-button');
let signupBttn = document.getElementById('signup-button');

form.addEventListener('click', (e) => {
    let petSelectors = {
        dog: document.getElementById('pet-dog').checked,
        cat: document.getElementById('pet-cat').checked,
        goldfish: document.getElementById('pet-goldfish').checked
    };

    let signupSelector = {
        yes: document.getElementById('signup-yes').checked,
        no: document.getElementById('signup-no').checked
    }
    console.log(signupSelector);

    signupBttn.disabled = !isValidCombination(petSelectors, signupSelector)

    catsBttn.disabled = !signupSelector.yes;


    if (e.target === catsBttn) {
        alert('Thank you, you\'ve successfully signed up for cat facts')
    }

    if (e.target === signupBttn && !catsBttn.disabled) {
        alert('Thank you, you\'ve successfully signed up for cat facts')
    }

    if (e.target === signupBttn && catsBttn.disabled) {
        alert('Sigh, we still added you to the cat facts list')
    }

})

function isValidCombination(petSelectors, signupSelector) {
    return petSelectors.cat || petSelectors.dog || (signupSelector.no && petSelectors.goldfish);
}
