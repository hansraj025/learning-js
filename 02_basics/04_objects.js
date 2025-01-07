// 'use strict';

const muzzMatchUser = new Object(); // Singleton Object
muzzMatchUser.id = '1';
muzzMatchUser.name = 'Farahan';
muzzMatchUser.isLoggedIn = false;
console.log(muzzMatchUser);


const tinderUser = {              // Non singleton object
    id: '2',
    name: 'Jaman',
    fullname: {
        firstname: 'Jaman',
        lastname: 'Lomuto'
    },
    isLoggedIn: false
};
// console.log(tinderUser);
// console.log(tinderUser.fullname?.firstname, tinderUser.fullname?.lastname);


const obj1 = {
    1: 'a',
    2: 'b',
};

const obj2 = {
    3: 'a',
    4: 'b',
};

const obj3 = {
    5: 'a',
    6: 'b',
};

// const combinedObject = {obj1, obj2, obj3};  // combinedObject contains objects as values
// console.log(combinedObject);

// const flattendedObject = {};
// Object.assign(flattendedObject, obj1, obj2, obj3);  // all key value paris of obj1, obj2, obj3 are copied toflattenedObject
// console.log(flattendedObject);

// const spreadObject = {...obj1, ...obj2, ...obj3};
// console.log(spreadObject);


const users = [
    {
        id: 1,
        email: 'a@m.c'
    },    {
        id: 2,
        email: 'b@m.c'
    },    {
        id: 3,
        email: 'c@m.c'
    },    {
        id: 4,
        email: 'd@m.c'
    },
]
// console.log(users.map((user) => `${user.id}:${user.email}`));    // Mapping array to an array of strings
// console.log(users.map( ({id, email}) => ({[id]: email}) ))       // Mapping array to an array of objects



console.log(Object.keys(muzzMatchUser));    // returns array of keys
console.log(Object.values(muzzMatchUser));  // returns array of values
console.log(Object.entries(muzzMatchUser))  // returns array of arrays, nested arrays contain entries
console.log(muzzMatchUser.hasOwnProperty('id'));
console.log(muzzMatchUser.hasOwnProperty('nationality'));