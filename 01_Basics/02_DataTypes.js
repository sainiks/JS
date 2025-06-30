"use strict"; // This line tells JavaScript to be stricter about checking our code for common mistakes.

// 'alert' is something that works in web browsers to show a pop-up message.
// It doesn't work when we run JavaScript directly with Node.js (which is what we are doing here).
// alert( 3 + 3); // This line is a comment, so it won't run. It shows what would cause an error.

console.log(3 + 3);  // This will print the answer of 3 + 3, which is 6.
console.log("kunal"); // This will print the word "kunal".

// Here we are creating some variables with different kinds of information.
let name = "kunal";      // 'name' holds text (called a "string").
let age = 19;           // 'age' holds a number.
let isLoggedIn = false;  // 'isLoggedIn' holds either true or false (called a "boolean").
let state = null;       // 'state' is set to 'null', meaning it's empty or has no value on purpose.
let city;               // 'city' is created, but we haven't given it a value yet. So it's "undefined".


// Basic Types of Data in JavaScript:
// Number: Used for numbers, like 10, 3.14, or -5.
// BigInt: Used for very, very large whole numbers.
// String: Used for text, like "hello" or "JavaScript". Always put text in quotes (" " or ' ').
// Boolean: Used for true or false values. For example, is something on or off?
// Null: Means "nothing" or "empty". It's like saying a box is intentionally empty.
// Undefined: Means a variable has been created, but no value has been put into it yet.
// Symbol: Used to create unique values. This is a bit more advanced.


// There is also another main type:
// Object: Used to store collections of related data or more complex things.
//         Things like lists (Arrays) or dates are also kinds of objects.

// 'typeof' is a special command that tells us what type of data a variable holds.
console.log(typeof "kunal");       // This will print "string" because "kunal" is text.
console.log(typeof age);          // This will print "number" because age (19) is a number.
console.log(typeof isLoggedIn);   // This will print "boolean" because isLoggedIn is true/false.
console.log(typeof null);         // This will print "object". This is a bit of a strange quirk in JavaScript! Even though null is a basic type, typeof says it's an object.
console.log(typeof undefined);    // This will print "undefined" because 'city' doesn't have a value yet (or any variable that is undefined).
