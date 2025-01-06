// 'use strict';

// singleton object is created when created by a constructor.
const singObj = Object();
// console.log(typeof Object, Object);
// console.log(typeof singObj, singObj);


// Object literals(Does not create a singleton object)
const key1 = Symbol('key1');
const key2 = Symbol('key2');

const dictionary = {
    [key1]: 'value1',   // Using Symbol as a key
    key2: 'value2',
    'Hello': 'A greeting used to initiate conversation.',
    'Bye': 'A conversation ender, used as send off.',
    'Namaste': 'Hello in hindi.'
};
// console.log(typeof dictionary, dictionary);
// console.log(dictionary.Hello, dictionary['Hello']);

// console.log(dictionary.key1, typeof dictionary.key1);
// console.log(dictionary[key1], typeof dictionary[key1]);
// console.log(dictionary.key2, typeof dictionary.key2);


// dictionary.Namaste = 'Hello in spanish.';
// console.log(dictionary);
// Object.freeze(dictionary);
// dictionary['Namaste'] = 'Hello in mandarin';
// console.log(dictionary);

// dictionary['Hola'] = 'Hello in spanish';
// console.log(dictionary);
// Object.freeze(dictionary);  // Changes to the object below this will not be reflected
// dictionary['Hola'] = 'Hello in hindi.';
// console.log(dictionary);

dictionary['Hola amigo'] = 'Hello friend';
// console.log(dictionary['Hola amigo']);

dictionary.open = function(){
    console.log('Explore how conversations start and end in the world');
};
// dictionary.open();
// console.log(dictionary.open);

dictionary.someGreetings = function(){
    console.log(`${this.Hello}, ${this.Namaste}`);
};
// dictionary.someGreetings();
// console.log(dictionary.someGreetings);


