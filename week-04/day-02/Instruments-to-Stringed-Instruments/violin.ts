'use strict';

import { StringedInstrument } from "./stringed-instrument";

export class Violin extends StringedInstrument {

    constructor(numberOfStrings: number = 4) {
        super('Electric Guitar', numberOfStrings)
    }

    sound(): string {
        return 'Screech';
    }

    play() {
        console.log(`${this.name}, ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
    }

}