'use strict'

import { timeStamp } from "console";
import { StreamPriorityOptions } from "http2";

// https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/inheritance/garden-app/README.md

class Plant {
    private _color: string;
    private _waterNeed: boolean = true;
    private _waterLevel: Number;

    constructor(color: string, waterNeed: number, waterlevel?: number) {
        this.color = color;
        this.waterLevel = waterlevel || 0;
        this.waterNeed(waterNeed);
    }

    //Setters
    set color(color: string) {
        this._color = color;
    }

    set waterLevel(level: number) {
        this._waterLevel = level;
    }


    waterNeed(need: number):void {
        if (this._waterLevel < need) {
            this._waterNeed = true;
        } else {
            this._waterNeed = false;
        }
    }

}

class Flower extends Plant {

    constructor(color: string, waterlevel?: number) {
        super(color, 5, waterlevel);
    }

}

class Tree extends Plant {

    constructor(color: string, waterlevel?: number) {
        super(color, 10, waterlevel);
    }

}



class Garden {
    plants: Plant[] = [];


    addPlant(plant: Plant) {
        this.plants.push(plant);
    }



}
