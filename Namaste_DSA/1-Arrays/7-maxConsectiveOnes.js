function maxConsecutiveOnes(nums) {

  // Get the length of the array
  let n = nums.length;

  // Keeps track of the current streak of consecutive 1s
  let count = 0;

  // Stores the maximum streak found so far
  let maxCount = 0;

  // Traverse the array
  for (let i = 0; i < n; i++) {

    // If the current element is 1,
    // increase the current streak count
    if (nums[i] === 1) {
      count++;
    } else {

      // If we encounter a 0,
      // reset the current streak
      count = 0;
    }

    // Update the maximum streak if needed
    maxCount = Math.max(maxCount, count);
  }

  // Return the maximum consecutive 1s found
  return maxCount;
}

// Input array
const nums = [1, 1, 0, 1, 1, 1];

// Output: 3
console.log(maxConsecutiveOnes(nums));