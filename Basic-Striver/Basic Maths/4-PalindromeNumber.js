// Palindrome Number
// You are given an integer n. You need to check whether the number is a palindrome number or not. Return true if it's a palindrome number, otherwise return false.
// A palindrome number is a number which reads the same both left to right and right to left.

// Example 1 // Input: n = 121 // Output: true

// Explanation: When read from left to right : 121.  // When read from right to left : 121. 

function isPalindromeNumber(num) {
  // Variable to store the reversed number
  let rev = 0;

  // Store the original number because 'num' will change during the loop
  let duplicate = num;

  // Continue until all digits are processed
  while (num > 0) {

    // Get the last digit of the number
    let lastDigit = num % 10;

    // Add the last digit to the reversed number
    rev = rev * 10 + lastDigit;

    // Remove the last digit from the original number
    num = Math.floor(num / 10);
  }

  // Check if the reversed number is equal to the original number
  // If yes, it is a palindrome; otherwise, it is not
  return rev === duplicate;
}

// Number to check
let num = 121;

// Print true if palindrome, false otherwise
console.log(isPalindromeNumber(num));