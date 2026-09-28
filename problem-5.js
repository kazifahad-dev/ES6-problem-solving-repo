// Calculate shipping cost

const calculateShipping = (orderAmount, shippingFee = 60) => {
    return orderAmount >= 1000 ? "Free Shipping" : `Shipping Fee ${shippingFee} Taka`
}

console.log(calculateShipping(1000));
console.log(calculateShipping(500));
console.log(calculateShipping(500,100));

