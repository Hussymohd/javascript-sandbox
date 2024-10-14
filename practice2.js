// write a function that takes in a string and converts the first lettter of everyword to uppercase

const firstLetter = (str) => {
  const result = str.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return result.join(" ");
};
console.log(firstLetter("testing is fun and stressful"));

// write a function that checks if the parameter is a number or not - returns true or false

const checkNumber = (arg) => typeof arg === "number";

console.log(checkNumber("feedo"));

const currencyData = [
  { from: "GBP", to: "NGN", rate: 2200 },
  { from: "USD", to: "NGN", rate: 1700 },
  { from: "EUR", to: "NGN", rate: 1900 },
  { from: "YEN", to: "NGN", rate: 400 },
];

//iterate over the currency data and log a message the exchange rate for usd to ngn is 1700

 currencyData.map((currencyRate) => {
    console.log(
      `The Exchange Rate for $(currencyRate.from) to ${currencyRate.to}  ${currencyRate.rate} `
    );
 });

//  write a function that returns the exchange rate for that currency pair or an appropriate message if the pair is not found

const findCurrencyPair = (baseCurrency, toCurrency) => {
  const pair = currencyData.find(
    (currency) => currency.from === baseCurrency && currency.to === toCurrency
  );
  if (pair) {
    console.log(`The Exchange rate ${pair.from} to ${pair.to} is ${pair.rate}`);
  } else {
    console.log("The currency pair cannot be found");
  }
};
// search through the currency data to find a match.
findCurrencyPair("USD", "NGN");

// write a func that returns the exchange rate for that currency pair 
//or an appropriate message if the pair is not found
// const findCurrencyPair = (baseCurrency, toCurrency) => {
//   //search through the currencyData to find a match
//   const pair = currencyData.find((currency) => {
//     return currency.from === baseCurrency && currency.to === toCurrency;
//   });

//   if (pair) {
//     console.log(
//       The Exchange Rate for ${pair.from} to ${pair.to} is ${pair.rate}
//     );
//   } else {
//     console.log("The currency pair cannot be found");
//   }
// };

// findCurrencyPair("YEN", "NGN");

// A CONVERSION FUNCTION
// 2USD 
const convertCurrency = (baseCurrency, toCurrency, amount) => {
  const pair = currencyData.find((currency) => {
    return currency.from === baseCurrency && currency.to === toCurrency;
});

if (pair){
    // we will do conversion
   console.log(`${amount} ${pair.from} is equivalent to ${amount * pair.rate} ${pair.to} `);
   
} else {
    console.log("Currency pair not found"); 
}
};

convertCurrency("USD", "NGN", 500);

// Write a function to add to the currency data list

const addNewCurrency = (from, to, rate) =>{
    currencyData.push({from, to, rate});
    console.log(currencyData);
};
addNewCurrency("AUS", "NGN", 1040);









