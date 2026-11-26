"use strict";

const createOrderSummary = (customer, price, quantity) => {
    const subTotal = price * quantity;
    let discount = 0;
    if (subTotal >= 100000) {
        discount = subTotal * 0.1;
    
    }
    const finalAmount = subTotal - discount;
    return({
        customer: customer,
        subtotal: subTotal,
        discount: discount,
        finalAmount: finalAmount

    })
}
console.log(createOrderSummary("Chidi", 50000, 3))

const students = [
    { id: 1, name: "Ada", age: 16, subject: "Math", score: 92, enrolled: true },
    { id: 2, name: "Chidi", age: 17, subject: "Physics", score: 88, enrolled: true },
    { id: 3, name: "Amaka", age: 16, subject: "Biology", score: 95, enrolled: true },
    { id: 4, name: "Tunde", age: 15, subject: "Chemistry", score: 81, enrolled: false },
    { id: 5, name: "Zainab", age: 17, subject: "English", score: 90, enrolled: true },
];

const score = students.map(student => student.score)
console.log(score)
