//Traditional function declaration
function calculateTotal(price, qty){
    return price * qty;
}
//Explicit arrow function
const calaculatePerimeter = (length, width) => {
    return 2 * (length  + width)
}

//Arrow function with implicit return
const greet = (name) => `Hello ${name}`

const myName = "Paparazi";
const greet2 = () => `Hello ${myName}`

console.log(greet2("Nnamdi"))


//Arrow function and Callbacks
 const orders = [
    {id: 1, price: 900},
    {id: 2, price: 1000},
    {id: 3, price: 1200}
 ];
const prices =orders.map(order => order.price);

console.log(prices)


const add = (a, b) => a + b;
const subract = (a, b) => {return a - b};
//const subtract2 = (a, b) => a - b;
//const multiply = (a, b) => a * b;

const addition = add(10, 5);

console.log(addition)
console.log(subract(10, 5))
//console.log(subtract2(10, 5))