const students = [
  "Ada",
  "Chidi",
  "Amaka",
  "Tunde",
  "Zainab",
  "Emeka",
  "Ngozi",
  "Amina",
  "Femi",
  "Ifeoma",
];

console.log(students[1]) // getting the first element

students.push("Folashade") // insert a new element
console.log(students)

students.pop() // remove the last element
console.log(students)


students.shift() // Remove the first element
console.log(students)

students.unshift("Aliyu") // add to the beginning of the array
console.log(students)

console.log(students.length)


console.log(students)

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
console.log(order)

//Exercise 1
// Declare an array called products containing "Water", "Diesel", and "Petrol".
// Add "Gas" to the end of the array.
// Remove the first product from the array.
// Change "Diesel" to "Engine Oil".
// Print the updated array.
// Print the number of products remaining.




// Your task is to create updatedCustomer so that:
// - Its name becomes "Amaka".
// - Its address.city becomes "Abuja".
// - Its address.street remains "Ogui Road".
// - The original customer object remains completely unchanged.
// Hint: A shallow copy of the outer object alone is insufficient. Think about what else you need to copy.


// 1. Arrays and objects solve different problems.
// Arrays are ideal for collections of items, while
// objects represent entities with named properties.
// Real-world applications frequently combine both.

// 2. Arrays and objects are reference types.

// Assigning an existing array or object to 
// another variable does not create an independent copy. 
// Both variables reference the same underlying object.


// const turingTeachers = ["Chiemezie", "Munachi", "Mr. Victor"]

// const newTeachers = turingTeachers 

// newTeachers[0] = "Alade"

// console.log(newTeachers)
// console.log(turingTeachers)


// 3. The spread operator creates shallow copies.

// Spreading an object creates a new outer object, 
// but nested objects and arrays remain shared unless explicitly copied.
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
// const turingStudent = {
//     id: 1,
//     name: "Ijeoma",
//     age: 25,
//     complexion: "fair",
//     contact: {
//         phone: 9033972189,
//         email: "i.j@gmail.com"
//     },
// }



// const oldTuringStudent = {
//   ...turingStudent,
//   contact: {...turingStudent.contact}
 
//    }

// oldTuringStudent.name = "Ogechi"
// oldTuringStudent.contact.email = "Ogechi@gmail.com"

// console.log(turingStudent)
// console.log(oldTuringStudent)


const customer = {
  id: 101,
  name: "Chidi",
  address: {
    city: "Enugu",
    street: "Ogui Road"
  }
};

const updatedCustomer ={
  ...customer,
  name: "Amaka",
  address: {...customer.address, city: "Abuja"}
}
console.log(customer)
console.log(updatedCustomer)

const goodStudents = [
  {id: 1, name: "Wilson", score: 79},
  {id: 2, name: "John", score: 74},
  {id: 3, name: "Nnamdi", score: 97}
]

//create a new array
const copiedStudents = [...goodStudents];
console.log(copiedStudents)


//Modify an object in the copied array
copiedStudents[0].score = 84;
//console.log(goodStudents[0].score);

//Replace an element in the copied array
copiedStudents[1] = {
  ...copiedStudents[1],
  score: 88,
};

console.log(goodStudents[1].score)
console.log(copiedStudents[1].score)