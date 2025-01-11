

// Instance of Function i.e. createUser.__proto__ === Function.prototype
function createUser(username) {
    this.username = username;
    return true;
}
// console.log(createUser.__proto__ === Function.prototype);   // true


// Instance of createUser(function) i.e. userOne.__proto === createUser.prototype
const userOne = new createUser("userOne");
// console.log(userOne.__proto__ === createUser.prototype);    // true


// All properties of prototype of createUser are accessible by userOne
// All properties of prototype of parent object are accessible by instances
// console.log("Before adding a property: ", createUser.prototype)   // {}
createUser.prototype.someProperty = function(){
    console.log("This is a property of createUser.prototype");
};
// console.log("After adding a property: ", createUser.prototype)   // { someProperty: [Function (anonymous)] }

// userOne.someProperty();  // accessible
const userTwo = new createUser("userTwo");
// userTwo.someProperty();  // accessible


// keys/properties of object createUser are not accessible by instances of createUser
// console.log(createUser.prototype);  
// console.log(createUser)
createUser.greet = function () {    // greet property added to object (not to it's protype)
    console.log("Hello");
}
// console.log(createUser);    // instance was modified
// console.log(createUser.prototype);  // prototype was not modified



// ---------ANALOGY--------
// Prototype => Genes, properties of specific instance => habits analogy
const shinchansFamily = ["Himawari", "Mitsi", "Dad"];
shinchansFamily.familyMembersKeNaamBolo = function(){
    const a = shinchansFamily.reduce((accStr, currMember) => accStr = accStr + ' ' + currMember);
    console.log(a);
};
shinchansFamily.familyMembersKeNaamBolo();  // This is specific to shinchan, it's a habit of shinchan
shinchansFamily.at(1);  // This is somehting shinchan inherited from his parent

// shinchansFamily's genes are same as Array's genes
// shinchanFamily inherits properties of Array.prototype
console.log(shinchansFamily.__proto__ === Array.prototype);


const himawarisFamily = ["Shinchan", "Mitsi", "Dad"];
console.log(himawarisFamily.familyMembersKeNaamBolo)    // undefined, specific to shinchansFamily cause it's a habit of shinchan but not himawari


// HimawarisFamily's genes are inherited from Array
// HimawarisFamily.__proto__ === Array.prototype
// HimawarisFamily inherits all properties of Array.prototype
himawarisFamily.at(1);


// ??????????????????????????????????????????????????????????????????????????????????????????
console.log(shinchansFamily.prototype); // shinichansFamily doesn't have it's own prototype   