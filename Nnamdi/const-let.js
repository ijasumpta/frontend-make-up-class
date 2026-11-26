// Write a JavaScript program that:
// - Declares a product name using const.
// - Declares a product price using const.
// - Declares a quantity using let, initially set to 2.
// - Calculates and prints the total price.
// - Changes the quantity to 5.
// - Recalculates and prints the new total.

const productNmae = "water";
const productPrice = 90000;
let quantity = 2;

let totalPrice = productPrice * quantity

console.log(`Initial total: ${totalPrice}`)

quantity = 5;
totalPrice = productPrice * quantity

console.log(`Updated total: ${totalPrice}`)





// Exercise 2 — Intermediate: Delivery Order Management
// Create a JavaScript program that:
// - Declares an order object using const, with properties id, customer, status, and deliveryFee.
// - Initially sets the status to "pending" and the delivery fee to 5000.
// - Updates the status to "in_transit".
// - Increases the delivery fee by 2000.
// - Prints the updated order.
// - Explains why these modifications work despite using const.

const order = {
    id: 101,
    customer: "Aliyu",
    status: "pending",
    deliveryFee: 5000

}

order.status = "in_transit"
order.deliveryFee += 2000

console.log(order)

//The modification works because we're only mutating the properties of the variable not reassigning it

// Reassignment: let allows reassignment; const doesn't.

// Scope: Both are block-scoped and have a Temporal Dead Zone before their declarations execute.

// Mutation: A const object or array can still be mutated because the binding is fixed, not necessarily the contents.

const newOrder = {
  id: 101,
  customer: "Aliyu",
  status: "pending"
}

let deliveryStatus = 0

//reassignment
deliveryStatus = deliveryStatus + 1

//Mutation
newOrder.status = "in_transit"

//scope
if (deliveryStatus > 0){
  const newOrder = "Delivery attempted"
  console.log(newOrder)
}

console.log()
console.log("CONST VS LET")

console.log(deliveryStatus)
console.log(newOrder.status)
console.log(newOrder)


// Initial price: 3000
// Updated price: 7500

//ARRAYS
const students = [""]