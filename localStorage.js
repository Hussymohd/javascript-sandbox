//LOCAL STORAGE API - allows us to store inside of the browser

//set something into localstorage
// localStorage.setItem("token", "hello");

// // getting something from the local storage
// localStorage.setItem("token");

// // removes value in d local strorage
// localStorage.removeItem("token");

// // it clears everything out in d local storage
// localStorage.clear();

// local storage can only take in strings
// to use other data types, u do JSON.stringify(changing variable to strings)
//JSON - javascript object notation
const user = {
    id: 1,
    theme: "dark",
};

localStorage.setItem("user", JSON.stringify(user));

//TO RETRIEVE (JSON.parse)
JSON.parse(localStorage.getItem("user"));