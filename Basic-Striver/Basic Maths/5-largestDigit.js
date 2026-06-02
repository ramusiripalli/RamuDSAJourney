// Return the Largest Digit in a Number
// You are given an integer n. Return the largest digit present in the number.

// Example 1 // Input: n = 25  // Output: 5
// Explanation: The largest digit in 25 is 5.

function LargestDigit(num) {

  // Variable to store the largest digit found so far
  let largest = 0;

  // Loop until all digits are processed
  while (num > 0) {

    // Get the last digit of the number
    let lastDigit = num % 10;

    // If the current digit is greater than the largest digit,
    // update the largest value
    if (lastDigit > largest) {
      largest = lastDigit;
    }

    // Remove the last digit from the number
    num = Math.floor(num / 10);
  }

  // Return the largest digit found
  return largest;
}

// Number to check
let num = 99;

// Print the largest digit
console.log(LargestDigit(num));

let num = 99;
console.log(LargestDigit(num));