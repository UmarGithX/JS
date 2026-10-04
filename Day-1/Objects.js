let student = {
    fullName: "umar",
    age: 20,
    weight: 20.5,
    isPass : true,
}

for(key in student){
    console.log("Key is:",key , "value is :", student[key]);
    
}

for (const key in student) {
    console.log(key, "value is: ", student[key],);
    
}
// student.fullName = "Umar khan"

// console.log(student);
// console.log(typeof(student));


