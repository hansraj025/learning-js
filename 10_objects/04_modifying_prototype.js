
let myName = String("         Hansraj   ");
console.log(myName.length);

// instance.__proto__ is same as Array.prototype
// Now trueLength method should be available in all Array objects
myName.__proto__.trueLength = function() {
    return this.trim().length;
};

console.log(myName.trueLength());

let someonesName = "    [ ...  ]  ";
console.log(someonesName.trueLength())






let characterQuirks = {
    Izuku_Midoriya: "One for all",
    Ochako: "Gravity control",
    Todaraki: "Runs fast",

    getOchakosQuirk: function() {
        return `${this.Ochako}`;
    }
}
// console.log(characterQuirks.getOchakosQuirk());


// -- prototype chain example
Object.prototype.everywhere = true;

const oneArr = [];
console.log(oneArr.everywhere);

const oneStr = "";
console.log(oneStr.everywhere);

const oneDte = new Date();
console.log(oneDte.everywhere)



// -- inheritance
const Teacher = {
    giveLecture: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);



// --Adding property to all instances of a spec object

let name = "empty   ";
String.prototype.trimSpaces = function(){
    console.log(this);
    console.log("Trimmed string: " + this.trim());
}
name.trimSpaces();
"something         ".trimSpaces();
' ice tea'.trimSpaces();
console.log(' everywhere '.everywhere);