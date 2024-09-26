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

 // functions
// they are used to run snippets of code


// const dolphinScore1 = 96;
// const dolphinScore2 = 108;
// const dolphinScore3 = 89;
// const pandaScore1 = 88;
// const pandaScore2 = 91;
// const pandaScore3 = 110;
const dolphinScore1 = 97;
const dolphinScore2 = 112;
const dolphinScore3 = 101;
const pandaScore1 = 109;
const pandaScore2 = 95;
const pandaScore3 = 123;

const totalDolphinScore = dolphinScore1 + dolphinScore2 + dolphinScore3;
const totalPandaScore = pandaScore1 + pandaScore2 + pandaScore3;

const avgDolphin = totalDolphinScore / 3;
const avgPanda = totalPandaScore / 3;

console.log(`Average dolphin score is ${avgDolphin}`);
console.log(`Average panda score is ${avgDolphin}`);

if (avgDolphin > avgPanda){
    console.log("Dolphin wins")
} else if (avgPanda > avgDolphin){
   console.log("Panda wins");
} else{
    console.log("its a tie")
}

if (avgDolphin > avgPanda && avgDolphin >= 100) {
  console.log("Dolphin wins");
} else if (avgDolphin < avgPanda && avgPanda >= 100) {
  console.log("Panda wins");
} else{
  console.log("No team wins");
}

if (avgDolphin > avgPanda && avgDolphin >= 100) {
  console.log("Dolphin wins");
} else if (avgDolphin < avgPanda && avgPanda >= 100) {
  console.log("Panda wins");
} else if(avgDolphin === avgPanda && avgDolphin >= 100 && avgPanda >= 100){
  console.log("this is a draw");
} else{
    console.log("No team wins");
}
  

