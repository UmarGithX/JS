// calc the sum of array and product of it also.
let n = 4;
let arr = [];

for(let i = 1 ; i <= n; i++){
    arr[i-1] = i;
}
// console.log(arr);

let sum = arr.reduce((sum,product) => {
    return sum + product;
})
console.log(sum);

// now with same array need product of the array


let prod = arr.reduce((sum,product) => {
    return sum * product;
})
console.log(prod);
