const myCountry = "Nigeria";
console.log(myCountry);
console.log(myCountry.length)

let myAge = 20;
// myAge = myAge + 1;
myAge++
console.log(myAge);


const fullName = "Hussaina Mohammed";
console.log(fullName);
console.log(fullName.length)
console.log(fullName.toUpperCase());

console.log(fullName.slice(1));

const quote = `${fullName} is a citizen of ${myCountry}`;
console.log(quote);


console.log(myCountry.includes("h"));

 let remainder = 100 % 7;
 console.log(remainder)

 const marksMass = 95;
 const marksHeight = 1.88;
 const johnsMass = 85;
 const johnsHeight = 1.76;

 const marksBmi = marksMass / marksHeight ** 2;
 const johnsBmi = johnsMass / johnsHeight ** 2;
 const marksHigherBMI = marksBmi > johnsBmi;
 console.log(marksBmi, johnsBmi);

 console.log(marksHigherBMI);

 // if(marksHigherBMI){
 //     console.log("Mark's BMI is higher than John's")
 // } else{
 //      console.log("John's BMI is higher than Mark's");
 // }

 // comment out the first conditional statement
 // improve it to cater for if the marks bmi and johns bmi are equal

 if (marksBmi > johnsBmi) {
   console.log("Mark's BMI is higher than John's");
 } else if (johnsBmi > marksBmi) {
   console.log("John's BMI is higher than Mark's");
 } else {
   console.log("John's BMI and Mark's BMI is equal ");
 }

 