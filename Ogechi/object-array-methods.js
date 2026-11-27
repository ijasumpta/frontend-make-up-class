// const prices = [1000, 2000, 3000, 5000];

// const discountedPrice = prices.map(price => price * 0.1)

// console.log(discountedPrice)


// Example without .map()

//  function discount(price) {

//     const discountedPrice = price * 0.1

//     console.log(discountedPrice)

// }

// discount(5000);


 function discount(price) {

    const discountedPrice = price * 0.1

    return discountedPrice;
}

let result = discount(4000);


// 
function totalAmount(orderAmount) {
    return orderAmount - result;
    
}
 console.log(totalAmount(120000));

