function TwoSumSortedArray(nums, target) {

  // Pointer at the beginning of the array
  let left = 0;

  // Pointer at the end of the array
  let right = nums.length - 1;

  // Continue until both pointers meet
  while (left < right) {

    // Calculate the current sum
    let sum = nums[left] + nums[right];

    // If target is found, return 1-based indices
    if (sum === target) {
      return [left + 1, right + 1];
    }

    // If sum is too large,
    // move right pointer left to reduce the sum
    else if (sum > target) {
      right--;
    }

    // If sum is too small,
    // move left pointer right to increase the sum
    else {
      left++;
    }
  }

  // No pair found
  return [];
}

const nums = [0, 2, 7, 9, 11];
let target = 9;

console.log(TwoSumSortedArray(nums, target));