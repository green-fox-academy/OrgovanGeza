'use strict'

import { timeStamp } from "console";
import { StreamPriorityOptions } from "http2";

// https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/inheritance/garden-app/README.md

class Plant {
    private _color: string;
    private _waterNeed: boolean = true;
    private _waterLevel: number;
    waterNeedLevel: number;
    type: string='';

    constructor(color: string, waterNeed: number, waterlevel?: number) {
        this._color = color;
        this._waterLevel = waterlevel || 0;
        this.waterNeedLevel = waterNeed;
        this.waterNeedSetter(waterNeed);
    }

    //Setters
    set color(color: string) {
        this._color = color;
    }

    set waterLevel(level: number) {
        this._waterLevel = level;
    }

    //Getters
    get waterNeed() {
        return this._waterNeed;
    }

    get color() {
        return this._color;
    }

    waterNeedSetter(need: number): void {
        if (this._waterLevel < need) {
            this._waterNeed = true;
        } else {
            this._waterNeed = false;
        }
    }
}

class Flower extends Plant {
type : string = 'Flower'
    constructor(color: string, waterlevel?: number) {
        super(color, 5, waterlevel);
    }
}

class Tree extends Plant {
    type : string = 'Tree'
    constructor(color: string, waterlevel?: number) {
        super(color, 10, waterlevel);
    }
}


class Garden {
    plants: Plant[] = [];

    addPlant(plant: Plant) {
        this.plants.push(plant);
    }

    displayPlants() {
        for (let i = 0; i < this.plants.length; i++) {
            let thirst = this.plants[i].waterNeed ? 'needs water' : 'doesn\'t need water';
            console.log(`The ${this.plants[i].color} ${this.plants[i].type} ${thirst}`);
        }
        console.log('');
    }

    private _singleWatering(waterAmount: number) {
        let thirstyPlants: number = 0;

        for (let i = 0; i < this.plants.length; i++) {
            if (this.plants[i].waterNeed === true) {
                thirstyPlants++;
            }
        }

        if (thirstyPlants !== 0) {
            let waterPerPlant: number = waterAmount / thirstyPlants;
            for (let k = 0; k < this.plants.length; k++) {
                if (this.plants[k].waterNeed === true) {
                    if (this.plants[k].waterNeedLevel === 5) {
                        this.plants[k].waterLevel += (waterPerPlant * 0.75);
                        this.plants[k].waterNeedSetter(this.plants[k].waterNeedLevel)
                    } else if (this.plants[k].waterNeedLevel === 10) {
                        this.plants[k].waterLevel += (waterPerPlant * 0.40);
                        this.plants[k].waterNeedSetter(this.plants[k].waterNeedLevel)
                    }
                }
            }
        }

        console.log('Watering with ', waterAmount);
        if (thirstyPlants === 0){
            console.log('NO PLANT WAS THIRSTY, I DIDNT\'T WATER THEM');
        }
        this.displayPlants();

    }

    watering(){
        this._singleWatering(40);
        this._singleWatering(70);
    }

}




let garden = new Garden();

let flower1 = new Flower ('yellow', 6);
garden.addPlant(flower1);
let flower2 = new Flower ('blue');
garden.addPlant(flower2);

let tree1 = new Tree ('purple', 20);
garden.addPlant(tree1);
let tree2 = new Tree ('orange');
garden.addPlant(tree2);

garden.displayPlants();
garden.watering();
