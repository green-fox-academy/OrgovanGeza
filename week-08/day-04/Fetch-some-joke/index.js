'use strict';

const placeJokeHere = document.getElementsByClassName("joke")[0];
const bttn = document.getElementById("jokeGenerator");

bttn.addEventListener('click', (e) => {
  const URL = 'http://api.icndb.com/jokes/random';

  fetch(URL)
    .then(response => response.json())
    .then(myJson => myJson.value.joke).then(cnJoke => {
      let newNode = document.createElement('p');
      let newJoke = document.createTextNode(cnJoke);

      newNode.appendChild(newJoke);
      placeJokeHere.appendChild(newNode);
    });

})