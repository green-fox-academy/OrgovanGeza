'use strict';

import { StringedInstrument } from "./stringed-instrument";

export class ElectricGuitar extends StringedInstrument {

    constructor(numberOfStrings: number = 6) {
        super('Electric Guitar', numberOfStrings)
    }

    sound(): string {
        return 'Twang';
    }

    play() {
        console.log(`${this.name}, ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
    }

}