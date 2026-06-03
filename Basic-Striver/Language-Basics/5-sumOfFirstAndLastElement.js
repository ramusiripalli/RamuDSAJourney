// Function to calculate the sum of the first and last elements of an array
function SumOfFirstAndLastElement(nums) {

  // Edge Case:
  // If the array is empty, return 0 because there are
  // no elements to add.
  if (nums.length === 0) return 0;

  // Store the first element of the array
  let first = nums[0];

  // Store the last element of the array
  // nums.length - 1 gives the index of the last element
  let last = nums[nums.length - 1];

  // Return the sum of the first and last elements
  return first + last;
}

// Create an empty array
const nums = [];

// Call the function and print the result
console.log(SumOfFirstAndLastElement(nums));