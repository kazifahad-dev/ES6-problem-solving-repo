// Default parameters and spread/rest, total calculator and array merge

function calculateTotal (discount, ...prices){
    const total = prices.reduce((accumulator, currentValue) => 
        accumulator + currentValue,
     0);

     let discountAmount = (total * discount) / 100
     
     let totalAfterDiscountApply = total - discountAmount

    //  return totalAfterDiscountApply

    console.log(totalAfterDiscountApply);
    
     
    
}


calculateTotal(10, 100, 200, 50, 300)