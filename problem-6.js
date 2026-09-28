// get Grade 

const getGrade = (mark) => {
    return typeof mark !== "number" ? "Invalid" : mark >= 90 ? "A+" : mark >= 80 ? "A" : mark >= 60 ? "B+" : "Fail"
}

console.log(getGrade(92));
console.log(getGrade(82));
console.log(getGrade(45));
console.log(getGrade("skoi"));
console.log(getGrade([]));
