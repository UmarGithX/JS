let countVowels = (str) => {
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