'use strict';

// Create a program that prints all the even numbers between 0 and 500

for (let i=0; i<501; i++){
    if(i%2!==0){
        continue;
    }
    console.log(i);
}