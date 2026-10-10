// logic for this

// 1. Define an array of numbers.
// 2. Call forEach on the array.
// 3. Inside the callback:
//    a. Receive each element (val).
//    b. Compute square = val * val.
//    c. Print square.
// logic for this


{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    arr.forEach((val) => {
        console.log(val ** 2);

    });
}

// 2nd method
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let calsquare = (val) => {
//     console.log(val ** 2);
// }
// arr.forEach(calsquare);

let newarray = arr.filter((val) =>{
    return val %2 === 0;
}
)
console.log(newarray);


// arr.map((num) => {
//     console.log(num**2);
    
// }
// )

