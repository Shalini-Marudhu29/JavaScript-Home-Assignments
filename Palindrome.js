
console.log("===== Example 1: Reverse a String =====");

// Function to reverse the string
function reverseString(str) {

    // Step 1: Convert input into characters
    let characters = str.split("");

    // Step 2: Loop through characters in reverse direction
    let reversed = "";

    for (let i = characters.length - 1; i >= 0; i--) {

        // Step 3: Concatenate the characters
        reversed = reversed + characters[i];
    }

    // Step 4: Return the reversed string
    return reversed;
}

// Test the reverseString function
console.log(reverseString("madam"));
console.log(reverseString("hello"));
console.log(reverseString("level"));
console.log(reverseString("javascript"));


console.log("===== Example 2: Check Palindrome =====");

// Function to check whether the string is a palindrome
function isPalindrome(str) {

    // Step 1: Reverse the original string
    let reversedString = reverseString(str);

    // Step 2: Compare original and reversed strings
    if (str === reversedString) {
        return true;
    } else {
        return false;
    }
}

// Test the isPalindrome function
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("level"));
console.log(isPalindrome("javascript"));
console.log(isPalindrome("racecar"));
