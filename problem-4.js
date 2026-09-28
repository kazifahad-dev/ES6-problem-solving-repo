// Merge and Deduplicate arrays

let array1 = [10, 20, 30, 40, 50]
let array2 = [50, 60, 20, 90]


let mergedArray = [...array1, ...array2]

let newArray = Array.from(new Set(mergedArray))

console.log(newArray);
