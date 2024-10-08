// OBJECTS - They are denoted by {}, inside of the {} we have key and value pairs(They are called object properties) and dey are seperated by colon. Properties are seperated by a comma. key describes the value. It can conatin any datatype.
// {key : value, key2, value2}
const person = {
  firstName: "Ade",
  lastName: "Wale",
  age: "64",
  isMarried: true,
  friends: ["John", "Jane"],
  workHours: {
    monday: "8 hours",
  },
};
console.log(person);

//How do we access properties inside of object. Two ways;
//Dot notation - objName.propertyName
console.log(person.age);
console.log(person.friends[0]);
console.log(person.workHours.monday);

//  and bracket notation - objName['propertyName']
console.log(person["age"]);
console.log(person["friends"][1]);
console.log(person["workHours"]["monday"]);

// Adding a new property to an object
person.car = 'Benz'
person.hobbies = ["running", "sleeping"]
console.log(person);

//removing a property from an object
delete person.isMarried;
console.log(person);

// OBJECT METHOD - are functionds d developer writes to work on the object
const book = {
    title: 'In the shadow',
    author: 'John Doe',
    yearPublished: '2000',
    genre: 'fiction',
    isBestSeller: 'false',
    rating: '3.5',
    summary : function(){
        console.log(`The Book is Titled ${this.title} and it is written by ${this.author} and published in the year ${this.yearPublished}. The genre of the book is ${this.genre}. It has a rating of ${this.rating} and it being the bestseller is ${false}.`);
    },
};
book.summary();
book.title
//this keyword - inside of a function declaration in an object
//it refers to the object

// // OBJECT DESTRUCTURING - its a modern and faster way of picking properties in an object - allows us to rename variable if it is clashing in a script
const user = {
  username: "user001",
  fullName: "Peter Pan",
  password: "****",
  profilePic: "avatar",
  followers: ["Wale", "John", "Jane"],
  following: ["Elon Musk", "T pain", "Ronaldo"],
  dateOfAccount: 2020,
  posts: {
    title: "JS is Fun",
    desc: "I love JS a lot",
  },
};

user.profilePic;
user.posts.title;
user.fullName;

const { username, profilePic, dateOfAccount, password, followers } = user;
const { posts: { title, desc },} = user;
console.log(title, desc);

const myMainUser = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
const email = "mubarak@google.com";
//aliase
const {
  id,
  email: mainUserEmail,
  address: {
    street,
    geo: { lat: latitude, lng: longitude },
  },
  company: { name, catchPhrase, bs },
} = myMainUser;

// ARRAY DESTRUCTURING - its a modern way of destructing elements according to their order (wen u use ap comma, it means u re skipping the first thing)

const peoplesName = ['Susan', 'Joy', 'Mercy', 'Ade']
const [, second] = peoplesName;
console.log(second);
