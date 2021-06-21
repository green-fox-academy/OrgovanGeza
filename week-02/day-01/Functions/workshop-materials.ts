'use strict';
export {};

/*
function greetFoxAlert() {
    alert('Hello Green Fox!');
  }
  
  greetFoxAlert();
  
  function greetFoxLog() {
    console.log('Hello Green Fox!');
  }
  
  greetFoxLog();
*/

  //Function arguments

function greetByName(name: string) {
  console.log(arguments);
  console.log('Well hi there,', name);
}

greetByName('Tojas');
greetByName('Barbi');


//Default values for function arguments

function greet(greet = 'Hi', name = 'pal') {
  console.log(greet, name);
}

greet('Hey');
greet('Hello', 'Tojas');


//Function return values

function makeGreen(name: string): string {
    let newName = `Green ${name}`;
    return newName;
  }
  
  let name = makeGreen('Tojas');
  greet('Whazzup', name);

  