let score1 = '33';
let score2 = '33abc';
let score3 = null;
let isStudying = true;

console.log(typeof score1);

// Converting to Number
let valueInNumber1 = Number(score1);
let valueInNumber2 = Number(score2);
let valueInNumber3 = Number(score3);
let isStudyingInNumber = Number(isStudying);

// '33' => 33
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

// '33abc' => NaN(Not a Number)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

// null => 0
console.log(typeof valueInNumber3);
console.log(valueInNumber3);

// true => 1; false => 0
console.log(typeof isStudying);
console.log(isStudyingInNumber);