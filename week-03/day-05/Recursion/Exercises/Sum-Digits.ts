'use strict';
export{}

//Given a non-negative integer n, return the sum of its digits recursively (without loops).

let n = 12345678;

let numsum = (num: number):number => {
    if (Math.floor(num) <= 0 ){
        return 0;
    } else {
        return num%10 + numsum(Math.floor(num/10));
    }
}
console.log(numsum (n));

