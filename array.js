// ARRAYS: re complex data types dey are denoted by square bracket. it contains element inside of an Array. The element are seperated by commas. They can hold more dan one value at at time. e.g [element1, element2, ] They usually contain the same data type

const mixedArr = [9, "str", true, 65, 9.8, null, [90, false] ];

const students = ["Goodness", "Aisha", "Adura" ] ;
console.log (students);

// ARRAYS PROPERTIES: Length
console.log(students.length);
// getting element in an array - means position of something - position arrName [position]
console.log(students[1]);
// change element in an array
students[0] = "John Doe";
console.log(students);

// ARRAY METHODS -WAYS WE CAN PERFORM ON AN ARRAY
// ADDDING AND REMOVING  ELEMENTS FROM AN ARRAY (PUSH, POP, SHIFT AND UNSHIFT)
// PUSH: pushes/add an element into an array but at the end 
// LIFO
// POP: will remove an element(last-thing) from an array but from the end(push)
// UNSHIFT: works in the beginning of an array (adding it in the beginning)
// SHIFTS: removes an element and returns it to u

students.push("Theresa");
students.push("Eniola");
students.pop();
students.pop();
console.log(students.pop());
students.unshift("Adedayo");
students.unshift("Timi");
students.shift();

console.log(students);

// HOW TO CONVERTS ARRAYS TO STRINGS(toString, join)
// toString - returns a string representation of an array
// JOINS - joins element in an array with a seperator(U can specify-meaning join those words with wat u want)
console.log(students.toString());
console.log(students.join("*"));

// HOW TO JOIN ONE ARRAY TO ANOTHER ARRAY
// we can also concatinate more than one array at a time
const onlineStudents = [ "John", "Peter", "Paul"];
const weekdayStudents = ["Ade", "Susan", "Joy"];
const allStudents = onlineStudents.concat(weekdayStudents, ["Ruth","Gift"]);
console.log(allStudents);

//INCLUDES: returns true or false based on whether an element is inside of an array or not
console.log(onlineStudents.includes("Paul"));

// SORT(arranges elements in an array in alphabetical order)
// REVERSE METHODS(reverses the element in an array(starts frm the back))
const carBrands = ["toyota", "lexus", "bmw", "audi", "chevrolet", "Audi"];
console.log(carBrands);
console.log(carBrands.sort());
console.log(carBrands.reverse());

// HOW WE CAN EXTRACT PORTIONS OF AN ARRAY- slice(start, end (not included))
const friends = ["Ola", "Timi", "John", "Jane"]
console.log(friends.slice(0, 2));
console.log(friends.slice(1));

// SPLITS- splits it into substrings but in an array
let text = "Hello World is fun";
console.log(text.split(" "));
const text2 = "tadapal";
console.log(text2.split("a"));
console.log(text2.split(""));

// hello olleh reversestr- reverse the element of a String
const reversestr = (str) => str.split("").reverse().join("");
console.log(reversestr("hello"));

// higher order array methods(callback functions, iterator methods)
// it goes over it and we can use it to perform a function
// they are named as plural so we can refer dem to singular
// for of method

const fruits = ["Oranges", "Mangoes", "Pears", "Grapes"]

for(const fruit of fruits){
    // console.log(fruit);
     console.log(`${fruit} is something i like`);
     if (fruit === "Pears"){
         console.log(`${fruit} is my best fruit`);
    }
}

// find, filter, forEach, map, reduce, every, some

// FOREACH - it executes a function for each element in an array(u need to write a function to tell it wat it needs to do - it goes through each item one by one and performs action)
const customers = ["Pete", "Pan", "Janer", "Dwayne", "Dizzy"];
customers.forEach((customer, index) =>{
console.log(customer, index);
})
// MAP: u have to tell it wat it needs to do-it performs a new function in an array and returns the new transformed element(creates a new array with transformed element)
const nums = [4, 5, 6, 7];
const transformedNums = nums.map((num) => {
    return num * 2; 
});
console.log(transformedNums);

// FIND - returns the first matching element in an array(just one)
const mySpecialNum = nums.find((num) =>{
    return num > 5;
})
console.log(mySpecialNum);

// FILTER - returns all element dat fits a search condition in an array(more dan 1)
const allSpecialNums = nums.filter((num) => num >= 5);
console.log(allSpecialNums);

let myBalance = 8000
const transactions = [4000, -125, 10000, -5000, -2000, 1500]

transactions.map((transaction) => {
 if(transaction > 0){
    console.log(`You have been credited with ${transaction} Naira`);
 } else{
    console.log(`You have been debited with ${transaction} Naira`); 
 }
});

transactions.map((transaction) => {
 myBalance += transaction;
});
console.log(myBalance);

const myCreditTransactions = transactions.filter((transaction) => transaction > 0)
console.log(myCreditTransactions);

const myDebitTransactions = transactions.filter(
  (transaction) => transaction < 0
);
console.log(myDebitTransactions);

const maxTransaction = 50000;
// find if there is any transaction close to dat maxTransaction
transactions.push(100000);

const specialTransaction = transactions.find((transaction) => transaction >= maxTransaction
);
console.log(specialTransaction);

// EVERY: checks if all elements satisfy a condition and returns whether true or false
const ages = [20, 42, 61, 81];
const allAdults = ages.every((age) => age >= 18);
console.log(allAdults);

// SOME: checks if at least one satisfy the condition
const someChildren = ages.some((age) => age < 18);
console.log(someChildren);

// REDUCE: is mostly used for accumulating numbers previous(prevv), current (curr)
const cartPrices = [25000, 32000, 15000, 4000, -2500];
const cartTotal = cartPrices.reduce ((prev, curr) =>{
    return prev + curr;
}, 300);
console.log(cartTotal);

// SORT arranges in alphabetical order
const peoplesName = ["Zigi", "Samson", "Niyi", "Ademola"];
// const atoZ = peoplesName.sort();
// console.log(atoZ);
const ztoA = peoplesName.sort((a, b) => b - a);
console.log(ztoA);

// const prices = [ 8000, 67000, 767, 5600];
// const highesttoLowest = prices.sort((a, b) => b - a)
// console.log(highesttoLowest)

const prices = [8000, 67000, 767, 5600];
const lowesttoHighest = prices.sort((a, b) => a - b);
console.log(lowesttoHighest);

// Array.isArray - checks if a variable is array or not
console.log(Array.isArray(45));

// Array.from - changes a datatype to an array
console.log(Array.from("123"));

// indexOf - picks the first character in a String
// lastIndexOf - picks the last character in a string

const arr = ["ade", "john", "jane", "ade"];
console.log(arr.indexOf("ade"));
console.log(arr.lastIndexOf("ade"));

// Delete - it is used to delete an element from an array( we dont use it because it leaves hole in ur array-it wont close up)
console.log(arr);[

]
delete arr[1];
console.log(arr);

// findIndex - it returns the position of the first element dat matches a search condition
const arr2 = [ 5, 6, 7, 8, 120, 500, 56]
const theIndexIs = arr2.findIndex((num) => num > 100);
console.log(theIndexIs);

