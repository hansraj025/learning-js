// ********************* for of loop **********************
const users = [
    {
        name: 'Akash'
    },
    {
        name: 'Baman'
    },
    {
        name: 'Chaman'
    }
];

// Accessing objects in a array
// for (const user of users) {
    // console.log(user);
// }

// Iterating through a string
const greeting = 'Happy New Year';
// for (const char of greeting) {
    // console.log(char);
// };


const map = new Map();
map.set('IN', 'India');
map.set('FR', 'France');
map.set('IN', 'India');
// console.log(map);

// Iterating through key, value pairs of a map
// for (const [key, value] of map) {
    // console.log(key, '=>', value);
// };

// map.forEach((val, key) => console.log(key, '=>', val));


// ********************* For in loop **********************

for (const [key, value] in map) {
    console.log(key, '=>' , value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'GTA'
};

// for (const [key, value] of myObject) {
    // console.log(key , '=>', value);
// };

// for (const key in myObject) {
    // console.log(key, '=>', myObject[key]);
// }


// ******************** For Each loop **********************
const nums = [1, 2, 3, 4, 5];
// nums.forEach((val, index) => console.log(val + index));

// users.forEach( (obj) => {
    // console.log(obj.name);
// })

