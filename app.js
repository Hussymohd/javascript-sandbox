// rest and spread operator - they re written by ... look alike but dey do diff things
// rest
const countries = ["Cuba", "Algeria", "Mexico", "USA"];
 const [one, ...others] = countries;

 console.log(one);
 console.log(others);
 
 const country = {
    name: "Nigeria",
    yearOfIndependence: 1960,
    officialLanguage: "English",
    isIsland: false,
 };
 const {name, ...remaining} = country;

 console.log(remaining);
 
// spread
const africanCountries = [ "Mali", "Togo", "Kenya", "Uganda"];
const asianCountries = [ "China", "Japan", "Bangladesh", "Vietnam"];

const allCountries = [...africanCountries, "Congo", ...asianCountries, "Austria", "France"];
console.log(allCountries);



// optional chaining - 
const user = {
    name: "John Doe",
    age: 45,
    gender: "male",
    previousJobs: {
        one: "Jumia",
        two: "Paystack",
        three: "Meta",
    }
};
console.log(user?.name);
console.log(user?.car);
console.log(user?.previousJobs?.three);

// if (user.profilePic){
//  display picture
//<img src = {} 
//}
//  img src = {user?.profilepic}

// nullish coalescence
// leftExpression ?? defaultValue (if it becomes null or undefined, use the default value(u have to provide))

const username = null;
console.log(username ?? "Unknown User");
