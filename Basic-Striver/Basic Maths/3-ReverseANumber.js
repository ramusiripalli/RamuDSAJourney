// Reverse a number
// You are given an integer n. Return the integer formed by placing the digits of n in reverse order.


// Example 1 // Input: n = 25 // Output: 52
// Explanation: Reverse of 25 is 52.


// Function to reverse a number
function ReverseANumber(num) {

  // Variable to store the reversed number
  let rev = 0;

  // Continue until all digits are processed
  while (num > 0) {

    // Extract the last digit of the number
    // Example: 52 % 10 = 2
    let lastDigit = num % 10;

    // Add the extracted digit to the reversed number
    // Step 1: rev = 0 * 10 + 2 = 2
    // Step 2: rev = 2 * 10 + 5 = 25
    rev = rev * 10 + lastDigit;

    // Remove the last digit from the original number
    // Example: 52 -> 5 -> 0
    num = Math.floor(num / 10);
  }

  // Return the reversed number
  return rev;
}

// Number to be reversed
let num = 52;

// Print the reversed number
console.log(ReverseANumber(num)); // Output: 25