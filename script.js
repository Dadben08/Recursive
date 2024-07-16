//Fibonacci Sequence: Implement a recursive function to generate the nth Fibonacci number. The Fibonacci sequence starts with 0 and 1,
// and each subsequent number is the sum of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...).

function fibonacci(n) {
    // Base cases
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        // Recursive case: F(n) = F(n-1) + F(n-2)
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Example usage:
let n = 7;  // Calculate the 7th Fibonacci number
let result = fibonacci(n);
console.log(`The ${n}th Fibonacci number is: ${result}`);


//Palindrome Checker: Create a recursive function to check if a given string is a palindrome (reads the same forwards and backwards), ignoring spaces, punctuation, and capitalization.


function isPalindrome(str) {
    // Normalize the string: convert to lowercase and remove non-alphanumeric characters
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Base cases
    if (str.length <= 1) {
        return true; // An empty string or single-character string is a palindrome
    } else {
        // Recursive case: check if first and last characters are the same
        if (str[0] === str[str.length - 1]) {
            // Recur for the substring excluding the first and last characters
            return isPalindrome(str.substring(1, str.length - 1));
        } else {
            return false; // Not a palindrome
        }
    }
}

// Example usage:
let testString1 = "A man, a plan, a canal, Panama!";
let testString2 = "racecar";
let testString3 = "hello";

console.log(`Is "${testString1}" a palindrome? ${isPalindrome(testString1)}`); // true
console.log(`Is "${testString2}" a palindrome? ${isPalindrome(testString2)}`); // true
console.log(`Is "${testString3}" a palindrome? ${isPalindrome(testString3)}`); // false
