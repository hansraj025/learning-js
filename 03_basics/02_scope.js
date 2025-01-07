// Scope, Intro to closures, Intro to mini hoisting(function accessibility in the code)

let a = 10; // global scope
const b = 20; // global scope
var c = 30;

{
    let aInside = -10;
    const bInside = -20;
    var cInside = -30;
    let a = -10;
    const b = -20;
    var c = -30;
    console.log(a, b, c);   // a, b here is different from a, b in global scope
}

console.log(a, b, c);   // a, b here are the ones from global scope


// console.log(aInside, bInside);    // No aInside and bInside in global scope
// cInside = cInside + 10; // accessible outside it's scope
// console.log(cInside);

const nation = 'India';
function one() {
    const city = 'Delhi';
    // console.log(nation);    // India

    function two(){
        const area = 'some area';
        // console.log(nation, city);  // India, delhi
    }
    // console.log(area);   // area is not defined in one's scope

    two();
}
// console.log(city);   // city is not defined in global scope
one();


if (true) {
    const iceCreamAvailable = true;
    if (true) {
        const iceCreamHere = false;
        // console.log('iceCreamAvailable:', iceCreamAvailable);    // You can take ice cream from someone older
    }
    // console.log('iceCreamHere', iceCreamHere); // You cannot take ice cream from someone younger
}
// console.log(iceCreamAvailable); // You cannot take ice cream from someone younger



// ************************* functions ***********************

console.log(addOne(5));
function addOne(num) {  // Definition
    return num + 1;
};
console.log(addOne(6));


// console.log(addTwo(5)); // A variable can't be accessed before it is declared, throws error
const addTwo = function(num) {  // Initialization of a variable addTwo with reference of a function
    return num + 2;
}
console.log(addTwo(6)); 