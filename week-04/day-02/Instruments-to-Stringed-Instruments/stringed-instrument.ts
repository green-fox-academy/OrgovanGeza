'use strict';

import { Instrument } from "./instrument";

export abstract class StringedInstrument extends Instrument {
    numberOfStrings: number;

    constructor(name:string, numOfStrings:number){
        super(name)
        this.numberOfStrings = numOfStrings;
    }

    abstract sound(): string;
}

