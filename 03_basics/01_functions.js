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
