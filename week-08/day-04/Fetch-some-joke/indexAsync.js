'use strict';

const placeJokeHere = document.getElementsByClassName("joke")[0];
const bttn = document.getElementById("jokeGenerator");

bttn.addEventListener('click', async e => {
    const URL = 'http://api.icndb.com/jokes/random';

    const response = await fetch(URL);
    const jsonResponse = (await response.json()).value.joke;

    jokeCreator(jsonResponse);

})

function jokeCreator(joke) {
    let newNode = document.createElement('p');
    let newJoke = document.createTextNode(joke);

    newNode.appendChild(newJoke);
    placeJokeHere.appendChild(newNode);
}