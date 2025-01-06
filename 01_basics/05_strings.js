let playerName = 'Hyouma Chigiri';
let playerAlias = 'Princess';
let playerNumber = 5;
let playerProfileURL = 'https://www.bluelock.com/hyouma%20chigiri';

// console.log(playerName + playerNumber); // Don't do this

// console.log(`${playerName} jersey number is ${playerNumber}.`); // Do this

// console.log(playerName);

// console.log(playerName.__proto__);

// console.log(playerName.anchor('1'));   // returns an anchor tag with attribute name='1'

// console.log(playerName.at(7));  // returns playerName[7]

// console.log(playerName.big());  // returns a big html element

// console.log(playerName.blink());

// console.log(playerName.bold());

// console.log(playerName.charAt(5));

// console.log(playerName.charCodeAt(5));  // utf char code of element at index 5

// console.log(playerName.codePointAt(5)); // utf char code of element at index 5

// console.log(playerName.concat(' runs very fast.'));

let playerName2 = String('Igaguri Gurimu'); // Constructor for String
// console.log(playerName2);

// console.log(playerName.endsWith('x'));

// console.log(playerName.fixed());

// console.log(playerName.fontcolor('red'));

// console.log(playerName.fontsize(16));

// console.log(playerProfileURL.includes('Blue', 0));

// console.log(playerName.indexOf('a'));

// console.log(playerAlias.isWellFormed());    // returns true if there are no [lone surrogates]*

// console.log(playerName.italics());

// console.log(playerName2.lastIndexOf('g', 10));   // returns the last index of substring 'g' in playerName2, starts search from given index and decreasing

// console.log(playerName.length);  // property of string

// console.log(playerName.link(playerProfileURL)); // returns an anchor tag with href set to passed value

// console.log(playerName.localeCompare(playerName2)); // if playerName < playerName2 => -1, if equal => 0, and if greater than then 1
// console.log(playerName2.localeCompare(playerName));
// console.log(playerName.localeCompare(playerName));

// console.log(playerName.match('i')); // returns result of the first match in a array
// console.log(playerName.match('k')); // No matches => returns null

// for (const match of playerName.matchAll(/i/g)) {    // Returns an iterable object which contains all matches found
    // console.log(match);
// };

// console.log(playerName.normalize());    // Normalizes string to match some standard

// console.log(playerName.padEnd(20, 'x'));    // pads till length 20 with 'x' at the end
// console.log(playerName.padStart(20, 'x'));  // pads till length reaches 20 with 'x' at the start

// console.log(playerName.repeat(2));  // appends the string to itself, if 2 then there will be two originals concatinated

// console.log(playerName.replace('i', 'o'));  // replace the first instance of 'i' with 'o'
// console.log(playerName.replaceAll('i', 'o'));

// console.log(playerName.search(/i/g)); // returns first substring start index which matches regex

// console.log(playerName.slice(0, 5));    // (0, 5)
// console.log(playerName.slice(-5, -2));  // (-5, -2) => (last index - 5, last index -2)
// console.log(playerName.slice(3));   // (3, end)
// console.log(playerName.slice(-3));  // (-3, end)
// console.log(playerName.slice(6, 0));    // Doesn't make sense
// console.log(playerName.slice(-5, -6));  // Doesn't make sense

// console.log(playerName.small());

// console.log(playerProfileURL.split('/'));

// console.log(playerProfileURL.startsWith('https'));

// console.log(playerName.strike());

// console.log(playerName.sub());

// console.log(playerName.substr(0, 5));   // returns [0,4], here 5 is length   
// console.log(playerName.substring(0,5)); // returns [0,4], here 5 is index

// console.log(playerName.sup());

// console.log(playerName.toLocaleLowerCase());    // fancy toLowerCase
// console.log(playerName.toLocaleUpperCase());    // fancy toUpperCase
// console.log(playerName.toLowerCase());

// console.log(playerName.toString());  // returns the primitive value of the String obj or the string that String object wraps

// console.log(playerName.toUpperCase());
// console.log(playerName.toWellFormed()); // Converts to a well formed (UTF-16 string without lone surrogate pairs) string

// console.log(`           ${playerName}         `.trim()); // removes whitespace at beg and end
// console.log(`           ${playerName}         `.trimEnd()); // removes ending whitespace
// console.log(`           ${playerName}         `.trimLeft()); // removes leading whitespace
// console.log(`           ${playerName}         `.trimRight()); // removes ending whitespace
// console.log(`           ${playerName}         `.trimStart()); // removes leading whitespace

// console.log(playerName.valueOf());  // returns the primitive value of String object or the string that the String object wraps

// console.log(Symbol.iterator(playerName));




let playerName3 = new String('Isagi Yoichi');   // a String object wrapping 'Isagi Yoichi'
// console.log(playerName3);
// console.log(playerName3.__proto__);
// console.log(playerName3.toString());    // returns the string wrapped by String object
// console.log(playerName3.valueOf());    // returns the string wrapped by String object

let playerName4 = playerName3;  // Now playerName4 references the same String wrapper object
// console.log(playerName3 === playerName4);

playerName4[5] = '-';           // string in js are immutable, string will now be modified
// console.log(playerName4);       // was not modified


let playerNumber3 = new Number(11); // A Number wrapper Object, primitive wrapper objects are immutable
// console.log(playerNumber3);
// console.log(playerNumber3.toString());  // Converts the wrapped value to string
// console.log(playerNumber3.valueOf());   // Converts the wrapped value to string

// let playerNumber4 = playerNumber3;
// console.log(playerNumber3 === playerNumber4);

// playerNumber4 = 10; // Changes the value to primitive number 10
// console.log(playerNumber3); // No change in playerNumber3




const it = playerName[Symbol.iterator](); // Symobl.iterator is a property that is a function which returns an iterator object
// this defines the the behaviour of object in iterable contexts
// console.log(it);    // it is an iterator object

let playerNameChar = it.next(); 
// console.log(playerNameChar)
// while (!(playerNameChar.done)) {
    // console.log(playerNameChar.value);
    // playerNameChar = it.next();
// }
// 

// for (const x of playerName) {
    // console.log(x);
// }