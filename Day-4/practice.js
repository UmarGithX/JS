let marks = [85,97,44,37,76,60];
let sum = 0;
for (const val of marks) {
    sum += val;
}
console.log(sum);

let avg = sum / marks.length;
console.log(`The average of the class is = ${avg}`)
