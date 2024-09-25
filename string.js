// DATA TYPES 1. primitive(hold jus one value at atime) 2. complex(can own more dan object arrays )
// primitive can own jus one at a time. strings, numbers, boolean, null, undefined eg they are jus text characters such as name to recognixe strings 
// its going to be in quotation mark no 8 Boolean true and false 
// strings- text character quotation mark ''"" eg 
const firstName = "John"; 
const lastName = "Doe";
console.log(firstName); 
console.log(lastName);

//  string properties :length, concatenation{joining one string to another} 
//  string.length
console.log(firstName.length);
console.log(lastName.length);
const fullName = firstName + " " + lastName;
console.log(fullName);
console.log(fullName.length);

// STRING METHODS: inbuilt javascript functions dat can be performed on strings
// toUpperCase, toLowerCase
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
// replace, replaceAll (wat u re changing and wat u want to change it to) replace will only replce d one in contact with why replaceall with replace
// all d instances
console.log(fullName.replace("o", "*"));
console.log(fullName.replaceAll("o", "*"));
// includes 
console.log(fullName.includes("y"));
// startsWith, endsWith
console.log(fullName.startsWith("Jo"));
console.log(fullName.endsWith("Doe"));

const myEmail = "hussainamohammed03@gmail.com";
console.log(myEmail);
console.log(myEmail.length);
console.log(myEmail.toUpperCase());
console.log(myEmail.includes("e"));
console.log(myEmail.endsWith("google.com"));

// indexOf, lastIndexOf (the first/last position of an element in a string)
console.log(myEmail.indexOf("h"));
console.log(myEmail.lastIndexOf("o"));
console.log(myEmail.charAt("5")); 
// charAt used for knowing the character element in a string

// concat
console.log(myEmail.concat("example"))
// trimming (used for removing white spaces both at the start and end)
const userName = "      hussymohd    ";
console.log(userName.length);
console.log(userName.trim());
// trimStart trimEnd( removes spacing only at the start/end)
console.log(userName.trimStart());
console.log(userName.trimEnd());
//methods used for extracting portions of a string 
// slice, substring, substr (start, num of characters we want)
// slice( start, end(non inclusive, jus where we stop,its not included))
const surname = "Sandler";
console.log(surname.slice(0,4));
// substring(used to extract portion a string (if the end is missing,it will pick up to the original staring same for slice))
console.log(surname.substring(0, 4)); 
// substr ( (1,4) start counting from position 1 and give me 4 characters)
console.log(surname.substr(0,5)); 

const author = "Ngozi Adichie";
const bookTitle = "Americanah"
const yearPublished = "2016";
const description = "The book " + bookTitle + " written by " + author + " was published in the year " + yearPublished;

console.log(description);
// template literals - allows us to format variables into strings
// backticks 'the Book ${bookTitle}'

const description2 = "The book " + bookTitle +" written by " + author + " was published in the year " + yearPublished;
console.log(description2);

const name1 = "Ade";
const name2 = 'Wale';
// Ade is a boy
const sentence = "${name1} is a boy";
// His name is wale
const sentence2 = 'His name is wale';

// 'Tinubu said and i quote 'let the poor breathe"
const quote = 'Tinubu said and i quote "let the poor breathe"';
console.log(quote);

// complex(can own more dan object arrays ) obejcts arrays