// Count number of odd digits in a number
// You are given an integer n. You need to return the number of odd digits present in the number.
// The number will have no leading zeroes, except when the number is 0 itself.
// Example 1   // Input: n = 5   // Output: 1



// Function to count how many odd digits are present in a number
function countNumberOfOddDigits(num) {

 if(num === 0) return 0;

  // Variable to store the count of odd digits
  let count = 0;

  // Loop until all digits are processed
  while (num > 0) {

    // Get the last digit of the number
    // Example: 2345 % 10 = 5
    let lastDigit = num % 10;

    // Check if the digit is odd
    // Odd numbers leave a remainder of 1 when divided by 2
    if (lastDigit % 2 === 1) {

      // Increase count if the digit is odd
      count = count + 1;
    }

    // Remove the last digit from the number
    // Example: 2345 -> 234 -> 23 -> 2 -> 0
    num = Math.floor(num / 10);
  }

  // Return the total count of odd digits
  return count;
}

// Number to check
let num = 2345;

// Print the result
console.log(countNumberOfOddDigits(num)); // Output: 2


// Time Complexity: O(d) where d = number of digits
// Space Complexity: O(1) (constant extra space)