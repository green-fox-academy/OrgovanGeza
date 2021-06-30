'use strict';

// Create a Sharpie class
    // We should know the followings about each sharpie:
        // color (which should be a string),
        // width (which will be a floating point number) and the
        // inkAmount (another floating point number)
    // We need to specify the color and the width at creation
    // Every sharpie is created with a default inkAmount value: 100
    // We can use() the sharpie objects: using it decreases inkAmount by 10


class Sharpie {
    color: string;
    width: number;
    inkAmount: number;

    constructor(color:string, width:number, inkAmount?:number){
        this.color = color;
        this.width = width;
        this.inkAmount = inkAmount || 100;
    }

    use(){
        this.inkAmount-=10;
    }

    show(){
        console.log('color: ',this.color,' width: ',this.width,' ink amount: ',this.inkAmount);
    }

}

let sharpie1 = new Sharpie ('red',5)
let sharpie2 = new Sharpie ('blue',3,50)

sharpie1.use()
sharpie2.use()

sharpie1.show()
sharpie2.show()