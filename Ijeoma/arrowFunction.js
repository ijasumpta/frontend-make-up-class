// function total(price, quantity) {
//     return price * quantity
// }

// const calParamiter = (l, w) => {
//     return 2 * (l + w)
// }




// //Traditional function declaration
// function calculateTotal(price, qty){
//     return price * qty;
// }
// //Explicit arrow function
// const calaculatePerimeter = (length, width) => {
//     return 2 * (length  + width)
// }

// //Arrow function with implicit return
// const greet = (name) => `Hello ${name}`

// const myName = "Paparazi";
// const greet2 = () => `Hello ${myName}`

// console.log(greet2("Nnamdi"))


// //Arrow function and Callbacks
//  const orders = [
//     {id: 1, price: 900},
//     {id: 2, price: 1000},
//     {id: 3, price: 1200}
//  ];
// const prices =orders.map(order => order.price);

// console.log(prices)


// const add = (a, b) => a + b;
// const subract = (a, b) => {return a - b};
// //const subtract2 = (a, b) => a - b;
// //const multiply = (a, b) => a * b;

// const addition = add(10, 5);

// console.log(addition)
// console.log(subract(10, 5))
// //console.log(subtract2(10, 5))






// const double = (number) => number * 2;

// const calculateFee = (price) =>  price * 0.1;

// const createUser = name => ({
//     name: name,
//     active: true
// });

// console.log(double(10));
// console.log(calculateFee(5000));
// console.log(createUser("Nnamdi"))

// //Arrow function as callbacks
// const prices = [1000, 2000, 3000]

// const applyDiscount = price => price * 0.9;

// const discountedPrices = prices.map(applyDiscount)

// const doubledPrices = prices.map(price => { return price * 2})

// console.log(discountedPrices)
// console.log(doubledPrices)
// console.log(prices)



/*
Assignment 1

Convert the following traditional functions into arrow functions using implicit returns wherever possible.
function greet(name) {
    return Hello, ${name}!;
}

function multiply(a, b) {
    return a * b;
}

function isEven(number) {
    return number % 2 === 0;
}

function getMessage() {
    return "Welcome to JavaScript";
}

*/

// const greet = (name) => `Hello ${name}!`

// const multiply = (a, b) => a * b;

// const isEven = (number) => number % 2 === 0

// const getMessage = () => `Welcome to JavaScript`

/*
Assignment 2

Write an arrow function called calculateDeliveryFee that accepts two parameters: distance and orderAmount.

Requirements:
- The base delivery fee is ₦1,000.
- Every kilometre costs an additional ₦200.
- If the order amount is ₦50,000 or more, apply a 20% discount to the total delivery fee.
- Return the final delivery fee.

*/ 
 const deliveryFee = (distance, orderAmount) => {
    const baseDelivery = 1000;
    const costperkm = 200;
    const totalDeliveryFee = baseDelivery + (distance * costperkm) + orderAmount;
    let discount = 0;

    if (orderAmount >= 50000) {
        discount = orderAmount *  0.2;
    }
    const finalDeliveryAmount = totalDeliveryFee - discount;

    return finalDeliveryAmount;

 }

console.log(deliveryFee(15, 30000));
console.log(deliveryFee(10, 50000));



    









