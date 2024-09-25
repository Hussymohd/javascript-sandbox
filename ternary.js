// if inside of if statement
let myAtmPin = 5678;
let enteredPin = 5678;
const myBalance = 8000;
let transactionAmount = 5000;
if (myAtmPin === enteredPin){
    console.log("Perform Transaction");  
} else {
    console.log("Incorrect Pin");
    
}
// ternary operator-works exactly like an if else function 


myAtmPin === enteredPin
  ? console.log("Perform Transaction")
  : console.log("Incorrect Pin");

myBalance >= transactionAmount
    ? console.log("Transaction Successful")
    : console.log("Insufficient funds");