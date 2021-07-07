'use strict';

export class Sum {

    sum(integers: number[]): number {
        let sum = integers.reduce((a, i) => a + i, 0);
        return sum;
    }
}