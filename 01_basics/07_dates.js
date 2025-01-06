'use strict';

let date = new Date();
// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());

// console.log(typeof date);

let currDate1 = new Date(2025, 0, 7);               // First Month
let currDate2 = new Date(2025, 0, 7, 0, 44, 30);    // First Month
let currDate3 = new Date('2025-01-07');             // First Month
let currDate4 = new Date('01-07-2025');             // First Month
let currDate5 = new Date('07-01-2025');             // Seventh Month, 01 July 2025

// console.log(currDate1);
// console.log(currDate2);
// console.log(currDate3);
// console.log(currDate4);
// console.log(currDate5);

// console.log(currDate1.getFullYear());   // 2025 
// console.log(currDate1.getMonth() + 1);; // 0 + 1, January
// console.log(currDate1.getDate());   // 7, Date
// console.log(currDate1.getDay());    // 2, Tuesday


// console.log(currDate1.toLocaleString('default', {
    // weekday: "long",
    // day: "2-digit",
    // month: "long",
    // year: "numeric"
// }));


const timeStamp1 = Date.now();
// console.log(timeStamp1)
// console.log(`Seconds elapsed since ${new Date(1970,0,1).toString()} is ${Math.floor(timeStamp1/100)}`)