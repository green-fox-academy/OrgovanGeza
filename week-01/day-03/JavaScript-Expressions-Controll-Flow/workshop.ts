'use strict';
/*
EXERCISES

// Modify this program to greet you instead of the World!
console.log('Hello, Géza');

// Modify this program to console.log Humpty Dumpty riddle correctly

console.log('Humpty Dumpty sat on a wall,');
console.log('Humpty Dumpty had a great fall.');
console.log('All the king\'s horses and all the king\'s men');
console.log('Couldn\'t put Humpty together again.');

// Greet 3 of your classmates with this program in three separate lines like:
//
// Hello, Esther!
// Hello, Mary!
// Hello, Joe!

console.log('Hello, Roland!');
console.log('Hello, Norbi!');
console.log('Hello, Hady!');


        Comments

        // single line comment

        /*
        multi line
        comment block
        */

        /*
        Types

        // Prints a string to the terminal window
        console.log('Hello world!');

        // Prints an integer to the terminal window
        console.log(42);

        // Prints a floating point number to the terminal window
        console.log(3.141592);

        // Prints a boolean to the terminal window
        console.log(true);


        Integers

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
        */


//EXERCISES

// Write a program that prints a few details to the console about you
// It should print each detail to a new line:
//  - Your name
//  - Your age
//  - Your height in meters (as a decimal fraction)
//
//  Example output:
//  John Doe
//  31
//  1.87
/*
console.log('Orgován Géza');
console.log(24);
console.log(1.78);
*/

// Create a program that prints a few operations on two numbers: 22 and 13

// Print the result of 13 added to 22

// Print the result of 13 substracted from 22

// Print the result of 22 multiplied by 13

// Print the result of 22 divided by 13 (as a decimal fraction)

// Print the remainder of 22 divided by 13

/*
const x = 22;
const y = 13;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
*/

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52
/*
const codingHrsPerDay = 6;
const semesterLength = 17;
const workdaysaWeek = 5;
const avgWorkingHrsWeekly = 52;

var hrsSpentCoding = (semesterLength * workdaysaWeek * codingHrsPerDay);
var codingHrs = (5*codingHrsPerDay);

console.log('hours spent with coding in a semester by an attendee = ', hrsSpentCoding);
console.log('the percentage of the coding hours in the semester = ', codingHrs/avgWorkingHrsWeekly*100, '%');
*/

        /*
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
        */


//EXERCISES

/*
let favoriteNumber: number = 8

// Store your favorite number in a variable (as a number)
// And print it like this: 'My favorite number is: 8'

console.log('My favorite number is: ',favoriteNumber)


// Swap the values of these variables
let numberToSwap1: number = 123;
let numberToSwap2: number = 526;

let tempVar = numberToSwap1;

numberToSwap1 = numberToSwap2;
numberToSwap2 = tempVar;

console.log(numberToSwap1);
console.log(numberToSwap2);


let massInKg: number = 81.2;
let heightInM: number = 1.78;

// Print the Body mass index (BMI) based on these values

console.log('BMI= ', massInKg/(heightInM ** 2));
console.log('BMI= ', massInKg/Math.pow(heightInM,2)); //same result


// Define several things as a variable, then print their values
// Your name as a string
// Your age as a number
// Your height in meters as a number
// Whether you are married or not as a boolean

let myName : string = "OG";
let myAge : number = 24;
let myHeight : number = 1.78;
let myMaritalStatus : boolean = false;

console.log(myName);
console.log(myAge);
console.log(myHeight);
console.log(myMaritalStatus);


//variable-mutation

let a: number = 3;
// make it bigger by 10
a +=3;
console.log(a);

let b: number = 100;
// make it smaller by 7
b-=7;
console.log(b);

let c: number = 44;
// double c's value
c*=2;
console.log(c);

let d: number = 125;
// divide d's value by 5
d/=5;
console.log(d);

let e: number = 8;
// what's the cube of e's value?
e*=e;
console.log(e);

let f1: number = 123;
let f2: number = 345;
// tell if f1 is bigger than f2 (as a boolean)
console.log(f1>f2);

let g1: number = 350;
let g2: number = 200;
// tell if the double of g2 is bigger than g1 (pras a boolean)
console.log(g2*2>g1);

let h: number = 1357988018575474;
// tell if 11 is a divisor of h (as a boolean)
console.log((h%=11)==0);

let i1: number = 10;
let i2: number = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
console.log(i1>Math.pow(i2,2) && i1<Math.pow(i2,4));

let j: number = 1521;
// tell if j is divisible by 3 or 5 (as a boolean)
console.log(j%3==0 || j%5==0);


//cuboid

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let a:number= 3;
let b:number= 4;
let c:number= 5;

console.log('Surface area: ', 2*a*b+2*a*c+2*b*c);
console.log('Volume: ', a*b*c);


//seconds-in-a-day

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let secondsInaDay = 24*60*60;
let secondsWentBy = currentHours*currentMinutes*currentSeconds;
console.log('remaining seconds in the day: ', secondsInaDay-secondsWentBy);
*/

      /*  
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
        */


//EXCERCISE

let a: number = 24;
let output1: number = 0;

// if a is even increment output1 by one
if (a%2==0){
    output1++;
}
console.log(output1);


let b: number = 13;
let output2: string = '';

// if b is between 10 and 20 set output2 to "Sweet!"
// if less than 10 set output2 to "Less!",
// if more than 20 set output2 to "More!"
if(10<b && b<20){
    output2 = 'Sweet'
}else if(b<10){
    output2 = 'Less!'
}else {
    output2 = 'More!'
}
console.log(output2);


let c: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

// if credits are at least 50,
// and is_bonus is false decrement c by 2
// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
// if is_bonus is true c should remain the same,

if (credits>=50 && !isBonus) {  
    c-=2;
} else if (credits<50 && !isBonus) {
    c--;
}else {
    c=c;
}
console.log(c);



let d: number =  8;
let time: number = 120;
let output3: string = '';

// if d is dividable by 4
// and time is not more than 200
// set output3 to "check"
// if time is more than 200
// set output3 to "Time out"
// otherwise set output3 to "Run Forest Run!"
if ((d%=4)==0){
    if (time<=200){
    output3 = 'check';
    }else if (time>200){
        output3 = 'Time Out!'
    }else {
        output3 = 'Run Forest Run!'
    }
}
console.log(output3);
