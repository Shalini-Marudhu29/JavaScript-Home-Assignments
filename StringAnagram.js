// Example 1
console.log("===== Example 1: Last Word Length =====");

let s1 = "Hello World";

let words = s1.split(" ");
let lastWord1 = words[words.length - 1];
let result = lastWord1.length;

console.log(result);


// Example 2
console.log("===== Example 2: Last Word Length After Trimming =====");

let s2 = "fly me to the moon";

let trimWords = s2.trim();
let splitWords = trimWords.split(" ");
let lastWord2 = splitWords[splitWords.length - 1];
let lengthOfLastWord = lastWord2.length;

console.log(lengthOfLastWord);


// Example 3
console.log("===== Example 3: Check Anagram =====");

function isAnagram(str1, str2) {
    let word1 = str1.replaceAll(" ", "").toLowerCase();
    let word2 = str2.replaceAll(" ", "").toLowerCase();

    let sortedWord1 = word1.split("").sort().join("");
    let sortedWord2 = word2.split("").sort().join("");

    return sortedWord1 === sortedWord2;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));