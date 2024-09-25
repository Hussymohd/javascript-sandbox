//  LOOPS by which u can perform repetitive times: for, while, do-while
// FOR LOOP(AKA iteration, recursion) - for(initializer; condition; increment){lines of codes}
// initializer-declaring a variable, condition-either true or false as long as it is true, it will keep running lines of Codes. it has to come to a point where it has to be false so dat the loop can stop without increment it wont stop. u have to be careful wen using loop to avoid ur laptop crashing.

for (let i = 0; i < 10; i++) {
    console.log("loop"); 
    //  console.log("loop" + i); 
}

// write a loop dat return the sum of natural numbers between 0 and 3 0 + 1+ 2 + 3(could be anything)
let sum = 0;

for (let i = 0; i <= 3; i++) {
  sum += i;
}
console.log(sum);

// WHILE LOOP - also has the same principle as for loop
// while
// initializer
// while(condition){
// increment
// }

let y = 0
while (y <= 5) {
  console.log("In the loop");
  y++
}

let num = 1;
while (num <= 10) {
  console.log("In the loop" + num);
  num++;
}

// DO WHILE LOOP- perform the action once atleast whether condition is true or false

let x = 5;
do {
 console.log('I am in the loop');
    x++;
} while (x <= 2);
  
