// response extractor 

const responseExtractor = (obj) => {
    const {user : {name : userName, age = 18}} = obj;
    return {
        userName,
        age
    }
    
}

console.log(responseExtractor({user : {name : "Rafi", age : 22}}));
