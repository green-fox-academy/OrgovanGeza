'use strict';

// Create Counter class
    // which has a counter (integer) field
        // at creation it should have a default value 0
    // there are two ways to create the class:
        // with 0 input parameters
        // with 1 input parameter called counter which is set as the initial value of the counter field
    // we can add another whole number to this counter: add(number)
    // we can just increase the counter's value by one: add() (no parameters)
    // we can get() the current counter value
    // and we can reset() the counter to the initial value set during the construction of the class
// use export Counter at the end of your file
// Check if everything is working fine with the proper test
    // Download counter.test.ts and place it next to your solution
    // Run npm install tape @types/tape --save-dev in the root of your repository folder (where you have a package-lock.json file already)
    // Run the test file with ts-node

export class Counter {
    counter : number;

    originalVal : number;

    constructor (counter: number = 0){
        this.counter = counter;
        this.originalVal = this.counter;
    }

    add(numToBeAdded:number=1 ) {
        this.counter += numToBeAdded;
    }

    get(){
        return this.counter;
    }

    reset(){
        this.counter = this.originalVal;
    }
}
