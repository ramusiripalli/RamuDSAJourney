function moveZerosToEnd(nums) {

  // Get the length of the array
  let n = nums.length;

  // Pointer to track the position
  // where the next non-zero element should be placed
  let x = 0;

  // First pass:
  // Move all non-zero elements to the front
  for (let i = 0; i < n; i++) {

    // If the current element is not zero
    if (nums[i] !== 0) {

      // Place it at index x
      nums[x] = nums[i];

      // Move x to the next position
      x = x + 1;
    }
  }

  // Second pass:
  // Fill the remaining positions with zeros
  for (let i = x; i < n; i++) {
    nums[i] = 0;
  }

  // Return the modified array
  return nums;
}

// Input array
const nums = [0, 1, 0, 3, 12];

// Output: [1, 3, 12, 0, 0]
console.log(moveZerosToEnd(nums));