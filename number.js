// NUMBER DATA TYPE 9 0.4 1198 
const myAge = 87;

// THINGS WE CAN DO WITH NOS IN JS 
// 1. number methods toFixed (it rounds up numbers to decimal point)
const num = 9.5678;
console.log(num.toFixed(0));
console.log(num.toFixed(1));

// MATH OPERATOR = - * /
const x = 7;
const y = 7;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

// RAISE TO THE POWER (denoted by **)
console.log(3 ** 2);

// MODULUS (denoted by %) (returns the remainder of the division)
console.log(3 % 2);
console.log(100 % 10);

// ORDER OF OPERATION (BODMAS)
// 4 + 2 * 3 ** 2;

let likes = 0;
// likes = likes + 1;
// likes = likes + 1;
// likes = likes + 1;
// likes = likes + 1;

// to increment by 1 (- decrementing by 1)
likes++;
likes++;
likes++;
likes--;
console.log("likes ", likes);

let savings = 5000;
// savings = savings + 3000;
savings += 3000;
// savings = savings + 10000;
savings += 10000;
// uber 7000
// savings = savings - 7000;
savings -= 7000;
// 525
// savings = savings - 525;
savings -= 525;
console.log(savings);

// SHORTCUT savings += 2000:

const fullName = "Peter Pan";
const accountNumber = '67081324';
let myBalance = 4000;

// jan transaction
// credited 10000, debited 200 as sms charges, received gift 3000, gifted someone 1200

myBalance += 10000;
myBalance -= 200; 
myBalance += 3000;
myBalance -= 1200;
console.log("My balance is ", myBalance);
// peter pan with accountNumber: has a balance of myBalance
const accountStatement = `${fullName} with account number ${accountNumber} has a balance of ${myBalance.toFixed(2)}`
console.log(accountStatement);


// NaN - not a number
console.log = (" Hello" / 4);