'use strict';

import { StringedInstrument } from "./stringed-instrument";

export class BassGuitar extends StringedInstrument {

    constructor(numberOfStrings: number = 4) {
        super('Electric Guitar', numberOfStrings)
    }

    sound(): string {
        return 'Duum-duum-duum';
    }

    play() {
        console.log(`${this.name}, ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
    }

}