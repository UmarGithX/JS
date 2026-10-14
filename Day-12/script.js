// call back
// argument to another function


// addition function
let hello = () => {
    console.log(a + b);

}
//multiply function
let multiply = (a, b) => {
    console.log(a * b);

}

// sum(2,5)
// callbacking the functions
function calculator(c, d, sumcallback) {
    sumcallback(c, d,);
}
calculator(3, 5, multiply, hello)
