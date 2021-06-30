'use strict';

// Create a PostIt a class that has
    // a backgroundColor
    // a text on it
    // a textColor
// Create a few example post-it objects:
    // an orange with blue text: "Idea 1"
    // a pink with black text: "Awesome"
    // a yellow with green text: "Superb!"


class PostIt {
    backgroundColor: string;
    text: string;
    textColor: string;

    constructor(bgColor:string,text:string,textCol:string){
        this.backgroundColor = bgColor;
        this.text = text;
        this.textColor = textCol;
    }
}


const postIt1 : PostIt = new PostIt ('orange', 'Idea 1', 'blue')
const postIt2 : PostIt = new PostIt ('pink', 'Awesome', 'black')
const postIt3 : PostIt = new PostIt ('yellow', 'Superb', 'green')