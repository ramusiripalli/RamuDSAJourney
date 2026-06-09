function singleNumber(nums) {

  // Create a Map to store the frequency of each number
  const freqMap = new Map();

  // Traverse the array and count occurrences of each number
  for (let num of nums) {

    // If the number already exists in the map,
    // get its current count and add 1.
    // Otherwise, start the count from 1.
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Traverse the map entries
  for (let [key, value] of freqMap) {

    // The number whose frequency is 1
    // is the single (unique) number
    if (value === 1) {
      return key;
    }
  }
}

// Input array
const nums = [3, 1, 5, 4, 5, 1, 3];

// Output: 4
console.log(singleNumber(nums));

//////////////////////////////////////////////////////


function singleNumberOptimized(nums) {

  // Initialize result to 0
  // XOR with 0 returns the number itself
  let result = 0;

  // Traverse the entire array
  for (let i = 0; i < nums.length; i++) {

    // XOR the current number with result
    // Duplicate numbers will cancel each other out
    result = result ^ nums[i];
  }

  // After all XOR operations,
  // only the unique number remains
  return result;
}

// Input array where every element appears twice
// except one element
const nums1 = [3, 1, 5, 4, 5, 1, 3];

// Output: 4
console.log(singleNumberOptimized(nums1));
