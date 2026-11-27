




// Assignment 1

// Convert the following traditional functions into arrow functions using implicit returns wherever possible.
// function greet(name) {
//     return `Hello, ${name}!`;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function isEven(number) {
//     return number % 2 === 0;
// }

// function getMessage() {
//     return "Welcome to JavaScript";
// }



/******************************************************* Assignment 1 Answer */
// const greet =(name) => `Hello, ${name}!`;


// const multipy = (a, b) => {a * b};


// const isEven =(number) => {number% 2 ===0};


// const getMessage = () => `Welcome to javaScript`; 


//  console.log(greet(Ruth));
// console.log(multiply(2, 5));
// console.log(isEven(100));
// console.log(getMessage);



/*
   Assignment 2

Write an arrow function named createOrderSummary that accepts three parameters: customer, price, and quantity.
 Requirements:
 1. Calculate the subtotal by multiplying the price by the quantity.
 2. Apply a 10% discount if the subtotal is at least ₦100,000.
 3. Calculate the final amount after the discount.
 4. Return an object containing the customer name, subtotal, discount amount, and final amount.
 5. Use let and const appropriately.

*/ 
// Asignment 2 Answer

const deliveryFee = (distance, orderAmount) => {
    const baseDelivery = 1000;
    const kilometre =  200;
    totalDelivery = baseDelivery + (distance * kilometre) + orderAmount;

    let discount = 0;


    if (orderAmount >= 50000){
        discount = discount * 0.2

  
}
  const finalDeliveryFee = totalDelivery - discount
  return finalDeliveryFee


}

console.log(deliveryFee (20, 15000));
console.log(deliveryFee(5, 20000))


/*   
    ASSIGNMENT 3 -- Thursday 26th Nov

 Write an arrow function called calculateBonus that accepts three parameters:
 - name — employee's name.
 - salary — employee's monthly salary.
 - performance — employee's performance rating, with a default value of "average".

 Business rules:
 Performance	    Bonus
 Excellent	    20% of salary
 Good	            10% of salary
 Average	        5% of salary
 Poor	            0%

 The function should return an object containing the employee's name, salary, bonus and total salary. For an invalid performance rating, return "Invalid performance rating".

 Test cases:
 console.log(calculateBonus("Emeka", 200000, "excellent"));
 console.log(calculateBonus("Amaka", 150000));
 console.log(calculateBonus("Chidi", 300000, "poor"));
 console.log(calculateBonus("Obinna", 100000, "unknown"));

  Expected output:
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

*/



const calculateBonus = (name, salary, performance) => {

}






const customer = {
  id: 101,
  name: "Chidi",
  address: {
    city: "Enugu",
    street: "Ogui Road"
  }
};

console.log(customer);

const updatedCustomer = {...customer, name:"Amaka", ...customer.address }
updatedCustomer.address.city= "Abuja"


console.log(updatedCustomer);
