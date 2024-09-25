// Errors in js 
// syntax error(the red line shows an error)
// reference (calling of something dat doesnt exist) (calling on variable bfr initializing it )
// wen u want to debug,check ur console to check where exactly is the issue coming from(the console gives feedback on lines that are affected)

// BOOLEAN VALUES - true or false(used for making decisons)
// Things to note wen working with Boolean value:comparison operator > < == === <= >= e.g
// ==(it is loose equality bcs it doesnt check data types
// ===(strick eqality bcs it checks the data type involved

console.log(6.5 > 9);
console.log(5 == "5");
console.log(5 == "5");

console.log(6.0 >= 6);
console.log(7.2 == "7.2");
console.log(5.0 === 5.0);
console.log(7 <= 8);
console.log(9.0 >= "90");
console.log(89 === "89");
console.log(4+4 >= 7);

// LOGICAL OPERATORS ( AND &&, OR||, NOT !)
// AND &&: all conditions must evalaute to true for everythimg to be true the moment u have 1 false, everything will be false
console.log(7 > 6 && 5 > 4);
console.log(11 === "11" && 3 >= 2);
console.log(5 >= 6 && 2 == 2);
console.log(7 === 7 && 9 > 11);
console.log("a" === "A" && 2 === 2); 

// OR ||: u must have a true for everything to be true
console.log(6 > 7 || 5 < 8)

// NOT !: is jus used to negate(denies it-means wen something is false it will be true and viceversa)
console.log(8 !== 8);
console.log(8 !== 8 && 2.0 > 2);

// TRUTHY AND FALSY VALUES
// strings that can be truthy and falsy - in strings, all value strings are truthy value, spaces as well. They are something you can work with could be names spaces etc all valid nos whether negative or positive are truthy values. 0 will give us a falsy value
console.log(Boolean(""))
console.log(Boolean(" "));

// null and undefined are falsy values