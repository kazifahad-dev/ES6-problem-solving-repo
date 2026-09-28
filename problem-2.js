function receptGenerator (name, price, quantity){
    console.log(name, price, quantity);

    const recept = `${name} x ${quantity} = ${price * quantity} Taka`
    return recept
        
}

const result = receptGenerator("Pen", 20, 3)
console.log(result);
