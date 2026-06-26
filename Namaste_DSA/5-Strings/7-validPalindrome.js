/**
 * Valid Palindrome
 * Checks whether a string is a palindrome after
 * ignoring spaces, punctuation, and special characters.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function optimizedPalindrome(str) {

    // Convert the entire string to lowercase
    // so comparison becomes case-insensitive
    str = str.toLowerCase();

    // Left pointer starts from the beginning
    let start = 0;

    // Right pointer starts from the end
    let end = str.length - 1;

    // Continue until both pointers meet
    while (start < end) {

        // If left character is not alphanumeric,
        // skip it and move left pointer forward
        if (!str[start].match(/[a-z0-9]/i)) {
            start++;
        }

        // If right character is not alphanumeric,
        // skip it and move right pointer backward
        else if (!str[end].match(/[a-z0-9]/i)) {
            end--;
        }

        // If both characters are equal,
        // move both pointers toward the center
        else if (str[start] === str[end]) {
            start++;
            end--;
        }

        // Characters do not match,
        // so the string is not a palindrome
        else {
            return false;
        }
    }

    // All valid characters matched
    return true;
}

// Test Case
const str = "A man, a plan, a canal: Panama";

console.log(optimizedPalindrome(str)); // true



///////////////////////////////////////////////////////////////////////////

// Brute Force Approach to check palindrome
function bruteIsPalindromeString(str) {

    // Convert entire string to lowercase
    str = str.toLowerCase();

    // Store only alphanumeric characters
    let filteredStr = "";

    // Store reverse of filtered string
    let reversedStr = "";

    // Traverse each character
    for (let i = 0; i < str.length; i++) {

        // Keep only letters and numbers
        if (str[i].match(/[a-z0-9]/)) {

            // Build filtered string
            filteredStr += str[i];

            // Build reversed string simultaneously
            reversedStr = str[i] + reversedStr;
        }
    }

    // Compare original filtered string with reversed string
    if (filteredStr === reversedStr) {
        return true;
    } else {
        return false;
    }
}

// Test Case
const str1 = "A man, a plan, a canal: Panama";

console.log(bruteIsPalindromeString(str1)); // true