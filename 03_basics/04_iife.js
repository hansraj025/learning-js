// Immediately Invoked Function Expressions (IIFE)
// Required for
    // 1. Immediate connection, say you fired up gta online it should immediately connect to it's server
    // 2. To make it's own scope, reduce global scope pollution (basically you can declare variables with names already existing in surrounding lexical scope)


(
    function namedIIFE(){
        console.log("Database connected.");
    }
)();    // ;, important

(
    (link) => {
        console.log(`Connected to database at link ${link}.`);
    }
)('some link');



const myName = 'Hansraj';

(
    (name) => {
        console.log(myName);
        console.log(`Hello, ${name}`);
    }
)('Hansraj');