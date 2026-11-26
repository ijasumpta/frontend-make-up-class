

// Exercise 2 — Intermediate: Delivery Order Management
// Create a JavaScript program that:
// - Declares an order object using const, with properties id, customer, status, and deliveryFee.
// - Initially sets the status to "pending" and the delivery fee to 5000.
// - Updates the status to "in_transit".
// - Increases the delivery fee by 2000.
// - Prints the updated order.
// - Explains why these modifications work despite using const.


const deliveryOrder = {
    id: 1,
    customer: "Ade",
    status: "pending",
    deliveryFee: 5000,
   

 
}

deliveryOrder.status = "in_transit";
deliveryOrder.deliveryFee = deliveryOrder.deliveryFee + 2000;



console.log(deliveryOrder);

const student2 = {
    id: 101,
    name: "Asumpta",
    course:"JavaScript",
    score: 65,
    status: "In proress",
}

 student2.status = "completed"
 student2.score = student2.score + 15

 console.log(student2);


 const bankAccount = {
    accountName: "Asumpta",
    bankName: "First Bank",
    balance: 50000,

    checkBalance(){
        console.log("bankAccount: " + this.accountName);
        console.log("bankAccount: " + this.balance);
    },

    deposit(){
        this.balance +=10000
    }
 }

 bankAccount.checkBalance();
 bankAccount.deposit();
 bankAccount.checkBalance();
