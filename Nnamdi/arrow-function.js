"Strict mode";

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

// //arrow function without parentheses
// hello = val => "Hello " + val;

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


const double = (number) => number * 2;

const calculateFee = (price) =>  price * 0.1;

const createUser = name => ({
    name: name,
    active: true
});

console.log(double(10));
console.log(calculateFee(5000));
console.log(createUser("Nnamdi"))

//Arrow function as callbacks
const prices = [1000, 2000, 3000]

const applyDiscount = price => price * 0.9;

const discountedPrices = prices.map(applyDiscount)

const doubledPrices = prices.map(price => { return price * 2})

console.log(discountedPrices)
console.log(doubledPrices)
console.log(prices)


// Write an arrow function named calculateDeliveryFee that accepts two parameters:
// - distance — delivery distance in kilometres.
// - rate — delivery charge per kilometre.
// Requirements:
// 1. Calculate the delivery fee by multiplying the distance by the rate.
// 2. Return the calculated fee using an implicit return.
// 3. Call the function with the sample arguments and print the results.

const calculateDeliveryFee = (km, rate) =>  km * rate;
console.log(calculateDeliveryFee(5, 1000))
console.log(calculateDeliveryFee(10, 1500))
console.log(calculateDeliveryFee(3, 2000))

// Write an arrow function named createOrderSummary that accepts three parameters: customer, price, and quantity.
// Requirements:
// 1. Calculate the subtotal by multiplying the price by the quantity.
// 2. Apply a 10% discount if the subtotal is at least ₦100,000.
// 3. Calculate the final amount after the discount.
// 4. Return an object containing the customer name, subtotal, discount amount, and final amount.
// 5. Use let and const appropriately.
    
const createOrderSummary = (customer, price, quantity) =>  {
        const subTotal = (price * quantity);
        let discount = 0;
        if (subTotal >= 100000) {
        discount = subTotal * 0.1
        }

        const finalAmount = subTotal - discount
        return({
            customer,
            subTotal,
            discount,
            finalAmount

            
        });

}


 const result = createOrderSummary("Udoka", 100000, 3);  
 console.log(result);

 
//ASSIGNMENT -- Thursday 26th Nov

// Write an arrow function called calculateBonus that accepts three parameters:
// - name — employee's name.
// - salary — employee's monthly salary.
// - performance — employee's performance rating, with a default value of "average".

// Business rules:
// Performance	    Bonus
// Excellent	    20% of salary
// Good	            10% of salary
// Average	        5% of salary
// Poor	            0%

// The function should return an object containing the employee's name, salary, bonus and total salary. For an invalid performance rating, return "Invalid performance rating".

// Test cases:
console.log(calculateBonus("Emeka", 200000, "excellent"));
console.log(calculateBonus("Amaka", 150000));
console.log(calculateBonus("Chidi", 300000, "poor"));
console.log(calculateBonus("Obinna", 100000, "unknown"));

//Expected output:
{
    name: "Emeka",
    salary: 200000,
    bonus: 40000,
    totalSalary: 240000
}

{
    name: "Amaka",
    salary: 150000,
    bonus: 7500,
    totalSalary: 157500
}

{
    name: "Chidi",
    salary: 300000,
    bonus: 0,
    totalSalary: 300000
}

"Invalid performance rating"
