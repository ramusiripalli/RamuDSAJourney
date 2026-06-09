/**
 * Linear Search Function
 * Searches for the target element in the array.
 * Returns the index of the target if found.
 * Returns -1 if the target is not present.
 */

function linearSearch(nums, target) {

  // Loop through each element of the array
  for (let i = 0; i < nums.length; i++) {

    // Check if the current element matches the target
    if (nums[i] === target) {

      // Target found, return its index
      return i;
    }
  }

  // If loop completes, target was not found
  return -1;
}

// Sample array
const nums = [4, 9, 1, 0, 3, 2];

// Element to search for
let target = 0;

// Call the function and print the result
console.log(linearSearch(nums, target)); // Output: 3