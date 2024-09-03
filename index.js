'use strict';

// JS every() example

const numbers = [150, 200, 300, 500, 750];

// Check if all numbers are bigger than 100
const isBig = numbers.every(number => number > 100);
console.log(isBig);


// Check if all numbers are smaller than 200
const isSmall = numbers.every(number => number < 200);
console.log(isSmall);