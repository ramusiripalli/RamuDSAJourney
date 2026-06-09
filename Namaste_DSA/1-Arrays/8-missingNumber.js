/**
 * Find the missing number in an array containing
 * numbers from 0 to n.
 *
 * Example:
 * nums = [3,0,1]
 * Output = 2
 */

function missingNumber(nums) {

    // Length of the array
    let n = nums.length;

    // Variable to store the sum of elements present in the array
    let actualSum = 0;

    // Calculate the expected sum of numbers from 0 to n
    // Formula: n * (n + 1) / 2
    let expectedSum = (n * (n + 1)) / 2;

    // Calculate the actual sum of elements in the array
    for (let i = 0; i < n; i++) {
        actualSum += nums[i];
    }

    // The difference gives the missing number
    return expectedSum - actualSum;
}

// Test Case
const nums = [3, 0, 1];

console.log(missingNumber(nums)); // Output: 2