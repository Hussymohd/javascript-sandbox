//ASYNCHRONOUS 

//SYNCHRONOUS / BLOCKING
// console.log("a");
// console.log("b"); //download a file of 2gb //30mins
// console.log("c");  //send an email

//nonblocking 

// console.log(1);

// setTimeout(() => {
//     console.log(2);  
// }, 5000);

// console.log(3);

// fetching data


// API - application programming interface 
// it allows us to improve our processing everytym

// ASYNCHRONOUS
const url = "https://jsonplaceholder.typicode.com/users";

//PROMISES - represents a container for future value and also an object that tells us the asynchronous value (diff states wen working with promises - fulfilled, rejected, pending

fetch(url)
.then((response) => response.json())
.then((data) => {
    console.log(data);  
}) 
.catch((error) => {  //catches error
  console.log(error);
});

// another method - async/ await(awaits a promise to be resolved) - we use try and catch in async/await method
const getUsers = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data); 
    }catch(error){
        console.log(error); 
    }
};
getUsers();

// REQUEST METHODS- are techniques used for interacting with API
//get - retrieves data
//post - creating a data
//patch - updating a data point
//delete - removing data
//put - updating (total overhaul) N.B to use any of this, you have to specify