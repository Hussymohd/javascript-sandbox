// CONDITIONAL STATEMENT
// CONTROL

// IF STATEMENT written as: if(condition){ } bfr lines of code can be executed,d condition have to be true.

if(true){
    console.log("yes")
}

const myBalance = 3000;
const transaction = 2000;

if(myBalance > transaction){
    console.log("Transaction successful")
}

const age  = 25;
if (age >= 18){
    console.log("You are eligible to vote")
}

// if the length of the password is 7 and above - good password
const password = "ae23hgsy4j@";

if (password.length >= 7 && password.includes("@")){
    console.log("Good password");
}

// if else statement (means 2 things) 

// if(condition){
// first action
//}else{
//     section action
// }

// const age2 = 15;
const age2  = 25;
if (age2 >= 18){
    console.log("You are eligible to vote");
} else{
    console.log("You are ineligible to vote, you must be 18+");
}

// youth/underage 0-40 or aged 41
const age3  = 40;
if (age3 >= 0 && age3 <= 40){
    console.log("You are in the youth/underage category");
} else{
    console.log("You are in thr aged category");
}

const number = 90;
if( number % 2 === 0){
    console.log("This is an even number");
} else{
    console.log("This is an odd number");
}

const savings = 9000;
const transactionAmount = 10000;
if( savings >= transactionAmount){
    console.log("Transaction successful")
} else{
    console.log("Transaction not successful")
}

// multiple else if statement (allows us to write multiple conditions at a time)
// positive > 0 negative < 0 and zero
let myNum = 98;

if (myNum > 0){
    console.log("This is a positive number");
} else if (myNum < 0){
    console.log("This is a negative number");
} else {
    console.log("This is zero")
}


// const age4 = 40;
const age4 = -40;
if (age4 >= 0 && age4 <=12){
    console.log("underage"); 
} else if (age4 >=13 && age4 <= 19){
    console.log("teen");
} else if(age4 >= 20 && age4 <= 40){
    console.log("Adult")
} else if(age4 >= 41){
    console.log("aged")
} else{
    console.log("Invalid age, pls try again");
    
}

// switch statement (after u have written ur line of codes you must break (break means stop dont continue )) used to switch expressions
// a - excellent, b- very good

let grade = "C";

switch (grade) {
  case "A":
  case "a":
    console.log("Excellent");
    break;
  case "B":
  case "b":
    console.log("Very Good");
    break;
  case "C":
  case "c":
    console.log("Good");
    break;
  case "D":
  case "d":
    console.log("Fair");
    break;
  case "E":
  case "e":
    console.log("Poor");
    break;
  case "F":
  case "f":
    console.log("Failed");
    break;
  default:
    console.log("Invalid grade");
}
     