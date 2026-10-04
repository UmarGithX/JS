// let screen = "lite";
// let color ;

// if(screen === "Dark"){
//     color = "black"
// }

// if(screen === "lite"){
//     color = "white"
// }

// console.log(color);


// 2nd 

// let age = 30
// if(age >=18 ){
//     console.log("you can vote");    
// }else{
//     console.log("you are not vote");
// }

// 3rd
// let number = 56;

// if (number % 2 === 0) {
//     console.log("even");
// } else {
//     console.log("ODD");

// }

// 4th else if

let age = 62;
let rank;
if (age <= 15) {
    rank = "junior"
    console.log(rank);
} else if (age <= 18) {
    rank = "ClassMate"
    console.log(rank);
} else if (age <= 60) {
    rank = "Seinor"
    console.log(rank)
} else {
    rank = "dead"
    console.log(rank);
}

// ternary operator
{
    let age = 12;
    let result = age >=25 ? "adult": "Child"
    console.log(result);
}
// 2nd shorter way to wruite ternary operator

{
    let age = 10;
    age >=18 ? console.log("Adult") : console.log("Not adult");
    
    
}