const myName = 'Hansraj';

function printVertically(name) {
    for (let ele of name) {
        console.log(ele);
    }
};
// printVertically(myName);


function greetUser(greeting, user) {
    console.log(`${greeting}, ${user}.`);
};
// greetUser('Hello', 'Hansraj');
// greetUser('Hello', 1);
// greetUser('Hello');
// greetUser();

function twoSum(n1, n2) {
    return (n1 + n2);
};
// console.log('Result:', twoSum());
// console.log('Result:', twoSum(1));
// console.log('Result:', twoSum('Hi'));
// console.log('Result:', twoSum(1, 2))
// console.log('Result:', twoSum(1, '2'))
// console.log('Result:', twoSum( null, true))

function loginUserMessage(username = 'John Doe') {
    if (username !== undefined)
        return `${username} just logged in.`;
    return 'username not available.';
};
console.log(loginUserMessage());
console.log(loginUserMessage(myName));


// Taking multiple values using rest operator
function calculateCartPrice(val1, val2, ...cart){
    return cart;
}
// console.log(calculateCartPrice(0, 0, 100, 200, 300));
// console.log(calculateCartPrice(0, 0, [100, 200, 300]));


// Handling objects
const user = {
    name: 'Hansraj',
    isStudying: true
};

const player = {
    username: 'tatadott',
    isOnline: false
};

function handleObject(anyObject){
    if (!anyObject.name && !anyObject.isStudying) { // Executes if they are either undefined or null or false
        console.log(`Object does not have {name} and {isStudying} keys.`);
        return;
    }
    if (!anyObject.name){   // Execs if it is undefined/null/false
        console.log('Object does not have {name} key.');
        return;
    }
    if (!anyObject.isStudying){ // Execs if it is undefined/null/fasle
        console.log('Object does not have {isStudying} key.');
        return;
    }
    console.log(`User ${anyObject.name} ${(anyObject.isStudying)?'is studying.':'is not studying'}`);
};

// handleObject(user);
// handleObject(player);
// handleObject({
    // name: 'Shinchan Nohara',
    // isPlaying: true
    // 
// });
// handleObject({
    // fullname: 'Shinchan Nohara',
    // isStudying: false
// });
// handleObject({
    // name: 'Hansraj',
    // isStudying: false
// });
// handleObject({
    // name: null,
    // isStudying: null
// })
// console.log(undefined == false, undefined == 0);


function fixedHandleObject(anyObject){
    if ((anyObject.name == null) && (anyObject.isStudying == null)) { // Executes if they are either undefined or null
        console.log(`Object does not have {name} and {isStudying} keys.`);
        return;
    }
    if (anyObject.name == null){   // Execs if it is undefined/null
        console.log('Object does not have {name} key.');
        return;
    }
    if (anyObject.isStudying == null){ // Execs if it is undefined/null
        console.log('Object does not have {isStudying} key.');
        return;
    }
    console.log(`User ${anyObject.name} ${(anyObject.isStudying)?'is studying.':'is not studying'}`);
};
// fixedHandleObject({
    // name: null,
    // isStudying: null
// });
// fixedHandleObject({
    // name: 'Shinchan Nohara',
    // isStudying: false
// });
// 


