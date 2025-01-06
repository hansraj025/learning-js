'use strict';

const marvelHeroes = ['Iron Man', 'Ant Man', 'Doctor Strange'];
const dcHeroes = ['Bat Man', 'Green Lantern', 'Robin'];

// marvelHeroes.push(dcHeroes);    // pushers dcHeroes array to marvelHeroes
// console.log(marvelHeroes);

// const allHeroes = marvelHeroes.concat(dcHeroes);
// console.log(allHeroes);

// const allNewHeroes = [...marvelHeroes, ...dcHeroes];
// console.log(allNewHeroes);

const arr = [1, [2, 3, 4], 5, [6, 7, 8]];
// const flattenedArr = arr.flat(Infinity);
// console.log(flattenedArr);

// console.log(Array.isArray("Amazing Spiderman"));    // Not array so false
const convertedArr = Array.from("Amazing Spiderman");   // creates array from passed parameter
// console.log(convertedArr); 
console.log(Array.from({'name': 'Amazing Spiderman'})); // interesting

let score1 = 1;
let score2 = 2;
let score3 = 3;
const scores = Array.of(score1, score2, score3);
// console.log(scores);


