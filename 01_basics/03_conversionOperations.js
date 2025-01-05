// ******************** Conversions **************************
let score1 = '33';
let score2 = '33abc';
let score3 = null;
let isStudying = true;

// console.log(typeof score1);


// Converting to Number
let valueInNumber1 = Number(score1);
let valueInNumber2 = Number(score2);
let valueInNumber3 = Number(score3);
let isStudyingInNumber = Number(isStudying);

// '33' => 33
// console.log(typeof valueInNumber1);
// console.log(valueInNumber1);

// '33abc' => NaN(Not a Number)
// console.log(typeof valueInNumber2);
// console.log(valueInNumber2);

// null => 0
// console.log(typeof valueInNumber3);
// console.log(valueInNumber3);

// true => 1; false => 0
// console.log(typeof isStudying);
// console.log(isStudyingInNumber);


// ******************** Operations **************************
// let value = 3;
// let negValue = -value;
// console.table([value, negValue]);


// console.log('1' + 2);        // Outputs 12
// console.log(2 + '1');        // Outputs 21
// console.log('1' + 2 + 2);    // Outputs 122 (0_0)
// console.log(2 + 2 + '1');    // Outputs 41  (0_0)


// console.log(true);
// console.log(+true);          // Outputs 1
// console.log(+'');            // Outputs 0
// console.log(true+);          // [Guess (*v*)]


// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2; // There are better ways to write it
// num1 = 1;
// num2 = 2;
// [num1, num2] = [num2, num1];
// console.table([num1, num2]);    // num1 => 2 and num2 => 1


// let videoNumber = 7;
// console.log(videoNumber);   // 7
// console.log(videoNumber++); // 7 => videoNumber incremented to 8 after printing
// console.log(++videoNumber); // 9 => videoNumber incremented before printing

