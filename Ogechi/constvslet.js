

// const customer = {
//   name: "Chinedu",
//   city: "Enugu"
// };

// customer.city = "Abuja";

// console.log(customer.city);

// const customer = {
//   name: "Chinedu"
// };

// // Allowed: modifying a property
// customer.name = "Ada";

// // Not allowed: reassigning the variable
// customer = {
//   name: "Emeka"
// };
// customer.name = "Emeka"

// const priceA = 10000;

// let priceB = priceA;

// priceA = 8000;

// console.log(priceA);
// console.log(priceB);

/*
/ Write a JavaScript program that:
// - Declares a product name using const.
// - Declares a product price using const.
// - Declares a quantity using let, initially set to 2.
// - Calculates and prints the total price.
// - Changes the quantity to 5.
// - Recalculates and prints the new total.
*/

// Exercise 1
const productName = "Blender";
const productPrice = 50000;
let productQuantity = 2;

let totalPrice = (productQuantity * productPrice);
console.log(totalPrice);

productQuantity = 5;
totalPrice = (productQuantity * productPrice);
console.log(totalPrice);

// Exercise 2 
// Delivery Order Management
const order = {
    id: 1,
    customer: "Samuel",
    status: "pending",
    deliveryFee: 5000,
};
order.status = "in-transit";
order.deliveryFee = order.deliveryFee + 2000;
console.log(order);

/*
The modifications work despite using const because the object or its properties are not modified but the values of the object property are and this is permissible for objects in JS.
*/