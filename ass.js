
// 1. cart.forEach(item => {
//   console.log(item.title);
// })

// 2. let totalNumber = 0;
// cart.forEach((item) => {
//   totalNumber += item.quantity;
// });
// console.log(totalNumber);

// 3. let mostExpensiveProduct = cart [0]
// cart.forEach((item) =>{
//   if (item.price > mostExpensiveProduct.price){
//   mostExpensiveProduct = item;
//   }
// })
// console.log(`The most expensive product is ${mostExpensiveProduct.price}`);

// 4. let totalValue = 0
// cart.forEach((item) => {
//   totalValue += item.price * item.quantity;
// })

// console.log(`The total value of the cart is ${totalValue}`);

// 5. let product = 0
// cart.filter((item) => {
//   if(item.price > 100){
//     product = item;
//   }
// })
// console.log(`This products cost more than ${product.price}`);

// 8.const allTitle = cart.map((item) => item.title).join(", ");
// console.log(allTitle);

// 9. const cartProduct = cart.find(item => item.price > 70
// );
// if (cartProduct) {
//   console.log(`There is a product more expensive than 70`);
// } else {
//   console.log(`No products are more expensive than 70`);
// }


const cart = [
  { title: "Laptop", price: 1000, quantity: 1 },
  { title: "Headphones", price: 200, quantity: 2 },
  { title: "Mouse", price: 50, quantity: 3 },
  { title: "AirPods", price: 400, quantity: 2 },
  { title: "TV", price: 1200, quantity: 2 },
];

// 1. Write a function that prints out the title of each product in the cart array.
const printCart = () => {
  cart.map((item) => {
    const {title} = item;
    console.log(title);
  });
};
printCart();

// 2. Write a function that calculates the total number of items (quantity) in the cart.
const totalQuantity = () => {
  return cart.reduce ((prev, curr) => prev + curr.quantity, 0);
};
console.log(totalQuantity());

// 3. Write a function that finds and prints the most expensive product in the cart.
const mostExpensive = () => {
  let expensive = cart[0].price;
  for (item of cart){
    if(item.price > expensive){
      expensive = item.price;
    }
  }
  console.log(expensive);
};
mostExpensive();

//4. Write a function that calculates the total value of the cart by multiplying the price and quantity for each product, and then summing up the results.
const totalValueInCart = () => {
  const totalValue = cart.reduce(
    (prev, curr) => prev + curr.price * curr.quantity, 0
  );
  console.log(totalValue);
};totalValueInCart();

// 5. Write a function that filters and displays products that cost more 100
const itemsGretaerThan100 = () => {
  const items = cart.filter((item) => item.price > 100);
  console.log(item);
};
itemsGretaerThan100();

//6. Write a function that checks if a certain product is in the cart based on its title. e.g is Laptop in the cart
const searchItem = (search) => {
  const item = cart.find((product) => product.title === search);
  if(item){
    console.log(item);
  }else{
    console.log("That item is not in the cart");
  }
};
searchItem();

//7. Write a function that displays each product along with its total value (price * quantity).
const displayItemPrice = () => {
  cart.forEach((product) => {
    console.log(`${product.title} costs ${product.price * product.quantity}`);
  });
};
displayItemPrice();

//8. Write a function that concatenates all the product titles into a single string, separated by commas.
const concatTitles = () => {
  return cart.map((product) => product.title).join(", ");
};
console.log(concatTitles());

//9. Write a function that checks if the cart contains any products that are more expensive than 70.
const checkmoreExpensivethan70 =  () => {
  return cart.some((item) => item.price > 70);
};
console.log(checkmoreExpensivethan70());

//10. Write a function that clears the entire cart (removes all products).
const clearCart = () => []
