'use strict';

//Comments

// single line comment

/*
multi line
comment block
*/


//Types

// Prints a string to the terminal window
console.log('Hello world!');

// Prints an integer to the terminal window
console.log(42);

// Prints a floating point number to the terminal window
console.log(3.141592);

// Prints a boolean to the terminal window
console.log(true);


//Integers

// Positive, negative and zero
console.log(42);  // Prints 42
console.log(-1);  // Prints -1
console.log(0);   // Prints 0

console.log(12341234123412341234); // 12341234123412340000
// In JavaScript numbers are rounded over a limit
// The maximal number that is not rounded (the maximum safe integer) is:
// 9007199254740991 (2^53)
console.log(9007199254740992); //comment to self: for some reason, tis still works..
// The reasoning behind that number is that JavaScript uses double-precision
// floating-point format numbers
// Link: http://en.wikipedia.org/wiki/Double_precision_floating-point_format


//Floats

// Positive, negative and zero
console.log(3.1415);  // Prints 3.1415
console.log(-1.5);    // Prints -1.5
console.log(0.0);     // Prints 0

// Leading and closing zero is not mandatory
console.log(.5)       // Prints 0.5
console.log(5.)       // Prints 5.0


//Number Operations

// Arithmetic operations
console.log(1 + 1);  // Prints 2
console.log(5 - 2);  // Prints 3
console.log(3 * 4);  // Prints 12
console.log(6 / 2);  // Prints 3
console.log(5 / 2);  // Prints 2.5
console.log(5 % 2);  // Prints 1 (az osztás maradékát adja ereményül vissza)


//Booleans

// true, false
console.log(true);   // Prints true
console.log(false);  // Prints false

// Boolean Operators
// Negation
console.log(!true);   // Prints false
console.log(!false);  // Prints true

// And
console.log(true && true);   // Prints true
console.log(true && false);  // Prints false
console.log(false && true);  // Prints false
console.log(false && false); // Prints false

// Or
console.log(true || true);   // Prints true
console.log(true || false);  // Prints true
console.log(false || true);  // Prints true
console.log(false || false); // Prints false


// String and special characters

console.log('apple');   // Prints apple
console.log('don\'t');  // Prints don't
console.log('"Everything you can imagine is real." - Picasso'); // Prints "Everything you can imagine is real." - Picasso


// String Operators

// Concatenation
console.log('tooth' + 'brush');  // Prints toothbrush

// Concat string with number
console.log('My favorite number is: ' + 8);  // Prints My favorite number is: 8






//Creating different variables for each type

// String
let welcome: string = 'Hello, World';
console.log(welcome);

// Boolean
let isAwesome: boolean = true;
console.log(isAwesome);

// Integer
let theMeaningOfLifeAndTheUniverseAndEverything: number = 42;
console.log(theMeaningOfLifeAndTheUniverseAndEverything);

// Floating point number
let pi: number = 3.141592;
console.log(pi);

// Assigning and creating a variable, (define its value)
let number: number = 12;

// Mutate a variable, (redefine its value)
number = 23;

// Any
let dynamic: any = 5;
dynamic = true;
dynamic = 'strange';


//Arithmetic Assignment Operators

let a: number = 12;
a = a + 4;
console.log(a); // Prints 16

let b: number = 12;
b = b - 4;
console.log(b); // Prints 8

let c: number = 12;
c *= 3;
console.log(c); // Prints 36

let d: number = 12;
d /= 3;
console.log(d); // Prints 4

let e: number = 12;
e %= 7;
console.log(e); // Prints 5

let f: number = 12;
f++;
console.log(f); // Prints 13

let g: number = 12;
g--;
console.log(g); // Prints 11

let h: number = 10;
console.log(h);   // Prints 10
console.log(h++); // Prints 10
console.log(h);   // Prints 11

let i: number = 10;
console.log(i);    // Prints 10
console.log(++i);  // Prints 11
console.log(i);    // Prints 11






//Nothings

undefined;
null;
NaN;

null !== undefined;
NaN !== undefined;
null !== NaN;

null == undefined;

typeof undefined;  // 'undefined'
typeof null;       // 'object'
typeof NaN;        // 'number'

let apple;
console.log(apple);      // undefined
console.log(apple + 1);  // NaN
apple = null;
console.log(apple);      // null


//Conditionals

let a: number = 13;

if (a === 13) {
console.log('Yaaay! The value of the \'a\' variable is 13'); // This block will run
}

if (a === 8) {
console.log('Yaaay! The value of the \'a\' variable is 8'); // This block will NOT run
}


let b: number = 20;

if (b < 10) {
console.log('Yaaay! The value of the \'b\' variable is lower than 10');  // This block will NOT run
} else {
console.log('Yaaay! The value of the \'b\' variable is higher than 10'); // This block will run
}


let c: number = 15;

if (c < 10) {
console.log('Yaaay! The value of the \'b\' variable is lower than 10');  // This block will NOT run
} else if (c < 20) {
console.log('Yaaay! The value of the \'b\' variable is higher than 10'); // This block will run
} else {
console.log('Yaaay! The value of the \'b\' variable is higher than 10'); // This block will NOT run
}


let thirsty: boolean = true;
let hungry: boolean = false;

if (thirsty && hungry) {
console.log('Lunch time!');
} else if (thirsty || hungry) {
console.log('Snack time!');
} else {
console.log('No food for you.');
}

