
// function vowelscounter(str){
// const vowels = ("aeiou");
// let count = 0;

// for(let char of vowels){
//     if(vowels.includes(char));
//     count ++ ;
//     console.log(char);

// }
// }

// vowelscounter("Umar")

// with array lets try

// let array = ["aeiou"]
// let usr = "UmaR"
// let count = 0;
// for (const element of array) {
//     console.log(element.toLowerCase());
//     if(element === usr){
//         count ++;
//     }

// }

// with deepsek
function countVowels(str) {
    const vowels = 'aeiou';
    let count = 0;
    for (const char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
            // console.log(char); // this will print the values of vowels
        }
    }
    
    return count;
    
}

// Example
let vowless = countVowels("hi")
console.log(vowless);

console.log(countVowels("sd oauewroif qwiourfoi aewrhgasi gjlandsjvnj"));  // this is function calling

