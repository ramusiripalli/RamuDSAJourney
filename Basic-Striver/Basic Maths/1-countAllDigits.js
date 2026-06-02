// Count all Digits of a Number
// You are given an integer n. You need to return the number of digits in the number.
// The number will have no leading zeroes, except when the number is 0 itself.


// Example 1  // Input: n = 4  // Output: 1
// Explanation: There is only 1 digit in 4.

// Function to count the total number of digits in a number
function countAllDigits(num) {

  // Special case:
  // If the number is 0, it contains 1 digit
  if (num === 0) return 1;

  // Variable to store the digit count
  let count = 0;

  // Loop runs until the number becomes 0
  while (num > 0) {

    // Increase count by 1 for each digit removed
    count = count + 1;

    // Remove the last digit from the number
    // Example: 23333 -> 2333 -> 233 -> 23 -> 2 -> 0
    num = Math.floor(num / 10);
  }

  // Return the total digit count
  return count;
}

// Number whose digits we want to count
let num = 23333;

// Call the function and print the result
console.log(countAllDigits(num)); // Output: 5