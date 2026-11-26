//OBJECTS
const order = {
    id: 1,
    customer: "Amaka",
    deliveryFee: 90000,
    status: "pending",
    address: {
        city: "Enugu",
        street: "10, adigun street"
    },

}

//access the properties
console.log(order.customer)

//Update a property
order.status = "Delivered";

//Add new property
order.date = "10th of March 2027";
console.log(order)

//access the nested property
console.log(order.address.city)

order.address.city = "Abuja"; // Modifying nested property
console.log(order)

// Delete a property
delete order.customer
console.log(order);