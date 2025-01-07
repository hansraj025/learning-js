
// Falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values
// "0", "false", " ", [], {}, function(){}


const arr = [];
if (!arr.length) {
    console.log('Array is empty');
};

const obj = {};
if(!Object.keys(obj).length) {
    console.log('Object is empty');
};


// Nullish Coalescing Operator (??) : null undefined
let val1;
// val1 = 5 ?? 10; // 5
// val1 = null ?? 10;  // 10
// val1 = undefined ?? 10; // 10
val1 = null ?? 10 ?? 15; // 10

console.log(val1);


// Ternary Operator
// console.log((true)?true:false);
// console.log((false)?true:false);
