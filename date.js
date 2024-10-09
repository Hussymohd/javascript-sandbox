//DATE OBJECT - returns a date of dat particular day

const date = new Date();
console.log(date);

//CONVERSION
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toTimeString);
console.log(date.toISOString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString);
console.log(date.toLocaleTimeString);

//GET METHOS - returns d year we re currently in
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
