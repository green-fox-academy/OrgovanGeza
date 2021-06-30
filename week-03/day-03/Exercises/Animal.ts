'use strict';

// Create an Animal class
    // Every animal has a hunger value, which is a whole number
    // Every animal has a thirst value, which is a whole number
    // When creating a new animal instance these values must be set to the default 50 value
    // Every animal can eat() which decreases its hunger by one
    // Every animal can drink() which decreases its thirst by one
    // Every animal can play() which increases both its hunger and thirst by one

class Animal {
    hunger:number = 50;
    thirst:number = 50;

    constructor (hunger?:number,thirst?:number){
        this.hunger = hunger || this.hunger;
        this.thirst = thirst || this.thirst;
    }

    eat(){
        this.hunger--;
    }

    drink(){
        this.thirst--;
    }

    play(){
        this.thirst++;
        this.hunger++;
    }

    show(){
        console.log(`hunger = ${this.hunger}, thirst = ${this.thirst}`);
    }
}

let anim1 = new Animal (11,34)
let anim2 = new Animal ()

anim1.play()
anim2.drink()
anim2.eat()

anim1.show()
anim2.show()