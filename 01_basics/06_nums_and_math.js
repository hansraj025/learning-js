'use strict';

let score = 500;
// console.log(score);

let balance = new Number(0.0000000);
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toFixed(2))

const angle = 1124.3345;
// console.log(angle.toPrecision(3));  // first three values will be precise rest will be rounded off, 1123.3345 => 1.12e+3

const anotherAngle = 1126.3345;
// console.log(anotherAngle.toPrecision(3));   // 1126.3345 => 1.13e+3

const amount = 10000000;
// console.log(amount.toLocaleString());   // adds commas
// console.log(amount.toLocaleString('en-IN'));

// ******************* Maths lib ***************************
// console.log(Math);
// console.log(typeof(Math));

// console.log(Math.abs(-4));

// console.log(Math.round(4.4));

// console.log(Math.ceil(4.4));

// console.log(Math.floor(4.4));

// console.log(Math.PI);

// console.log(Math.SQRT2);

// console.log(Math.min(1, 5, -1, 6));

// console.log(Math.max(1, 2, 5, 0, 11, 9));

// console.log(Math.random()); // returns real numbers between 0 to 1 

const min = 1;
const max = 6;
// console.log(Math.round((Math.random()*(max - min)) + min)); // generates random values between [1,6] which are rounded to {1,2,3,4,5,6}
