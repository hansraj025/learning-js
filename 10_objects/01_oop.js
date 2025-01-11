// -- Object and 'this', current context
const student = {
    name: "Hansraj",
    isStudying: true,
    takeBreak: function() {
        this.isStudying = false;
        console.log(`${this.name} is taking a break`);
    },

    getContext: function() {
        return this;
    },

    getContextArrow: () => this,
}


// console.log(student.getContext());
// console.log(student.getContextArrow)

// -- Global Execution Context
// console.log(this);
// this.isGlobalExectuionContext = true;
// console.log(this);


// -- Constructor Functions
const promiseOne = new Promise((resolve, reject) => {})
const date = new Date();

function createUser(username) {
    this.username = username;
    this.loginCount = 0;
    this.isLoggedIn = false;
    this.login = function () {
        this.isLoggedIn =true;
    }

    return this;    // Function returns current execution context
}

userOne = createUser("Hansraj");
userOne.login();
console.log(userOne);
userTwo = createUser("Shinchan");
console.log(userOne);   // context of userOne was overwritten by userTwo ?
console.log(userOne === userTwo);

userThree = new createUser("Himawari"); // new instance created
console.log(userOne);   // not modified

console.log(userThree.constructor)
console.log(userThree instanceof createUser);
