'use strict';

// JavaScript is a dynamically typed language (? v ?)
// JavaScript is not type safe (? v ?)
/*
On the basis of how memory is allocated
and how the variables are accessed from
the memory, there at two categories.

Related to pass by value and pass by reference.
*/


// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100;
const scoreValue = 100.3;

const isStudying = true;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(typeof id);
// console.table([id, anotherId]);
// console.log(id === anotherId);

const bigNumber = 999999999999999999n;
// console.log(typeof bigNumber);


// Reference (Non Primitive)
// Array, Objects, Functions

const heroes = ['Isagi Yoichi', 'Old Man Lan', 'Blue Ranger'];
// console.log(typeof heroes);

let myObj = {
    'name': 'Isagi Yoichi',
    'anime': 'Blue Lock'
};
// console.log(typeof myObj);

const myFunction = function() {
    console.log("Hello, World!");
};
// console.log(typeof myFunction);
// myFunction();


// ****** Primitive => Stack, Non primitive => Heap ******
// Primitive => Stack
// String, Number, Symbol, 
let playerName = 'Isagi Yoichi';
let playerNumber = 11;
let anotherPlayerNumber = playerNumber;
anotherPlayerNumber = 10;   // Does not change playerNumber
// console.log(playerNumber, anotherPlayerNumber); // pN => 10 and aPN => 9


// Non Primitive (Reference) => Heap
// Array, objects, functions
let player = {
    'name': 'Igaguri',
    'rank': 300
};

let anotherPlayer = player; // Reference stored in player is copied anotherPlayer
anotherPlayer.name = 'Isagi Yoichi';    // any modifications will be reflected in the original
anotherPlayer.rank = 299;
// console.log(player);
