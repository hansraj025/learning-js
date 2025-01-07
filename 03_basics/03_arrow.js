const user = {
    username: 'Hansraj',
    cartTotal: 999,

    loginMessage: function(){
        console.log(`${this.username}, welcome to github.com`);
        console.log(this);  // current context 
    }
};

// user.loginMessage;
// user.loginMessage();

// user.username = 'Jaman';
// user.loginMessage();


// In node the global context is just a empty object
// console.log(this);
// key: 'value'
// console.log(this);


// ********************* Functions context **********************
function chaiaurcode(){
    let instructor = 'Hitesh';
    console.log(this.username); // this.username is undefined
    console.log(this);  // logs functions context, which is not empty
};
// chaiaurcode();
// console.log(chaiaurcode, typeof chaiaurcode)


const af = () => {console.log(this)};   // inherits this from it's surrounding lexical context
console.log(af());   // undefined

function nf() {
    console.log(this)
    af();
};
console.log(nf());

const specialArrow = (energy) => { 
    let cultivator = 'Old Man Lan';
    console.log(this.cultivator);
    console.log(this);  // logs arrow functions context, which is empty. {}
    const damage = (energy)*(cultivator.charCodeAt(0));
    return damage;
};
// console.log(specialArrow(100));

const shootArrowImplicitly = (energy=100) => /*console.log(num, this)*/energy*10;
// console.log(shootArrowImplicitly());
// console.log(shootArrowImplicitly(200));

const addTwo = (num1, num2) => (num1 + num2);
// addTwo(1, 2);   // 3, a number

const addNums = (...nums) => ({
    sum: nums.reduce((prevVal=0, currVal) => (prevVal + currVal))
});
// console.log(addNums(1, 2, 3, 4));   // {sum : 10}, which is an object

// console.log(typeof this);


