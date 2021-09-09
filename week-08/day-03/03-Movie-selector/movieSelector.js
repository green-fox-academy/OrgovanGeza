'use strict';

const sciFi = ["Moon", "2001: A Space Odyssey", "Contact"];
const drama = ["Darkest Hour", "There Will Be Blood", "American Beauty"];
const comedy = ["Airplane!", "Deadpool", "Wayne/'s World"];

const form = document.forms[0];



form.addEventListener('change', (e) => {
    const selectedGenre = form.elements.genre.value;

    const lisElements = movies(selectedGenre);

   

    console.log(selectedGenre);
    console.log(lisElements);
})

function movies(selectedGenre) {
    if (selectedGenre === "sci-fi") {
        return { class: "sci-fi", movies: sciFi };
    } else if (selectedGenre === "drama") {
        return { class: "drama", movies: drama };
    } else {
        return { class: "comedy", movies: comedy };
    }
}