function bruteTwoSum(nums, target) {

  // Store the length of the array
  let n = nums.length;

  // Pick the first number of the pair
  for (let i = 0; i < n - 1; i++) {

    // Pick the second number of the pair
    // Start from i + 1 to avoid:
    // 1. Using the same element twice
    // 2. Checking duplicate pairs
    for (let j = i + 1; j < n; j++) {

      // Check if the current pair adds up to the target
      if (nums[i] + nums[j] === target) {

        // Return the indices of the matching pair
        return [i, j];
      }
    }
  }

  // No pair found whose sum equals the target
  return [];
}


/*
"This is a brute-force solution. I use two nested loops to generate every possible pair of numbers.
 For each pair, I check whether their sum equals the target. 
If a matching pair is found, I return their indices immediately. 
Since every pair may need to be checked in the worst case, 
the time complexity is O(n²), while the extra space used is O(1)."

*/



function optimizedTwoSum(nums, target) {
  // Create a map to store:
  // key   = number
  // value = index
  let map = new Map();

  // First pass:
  // Store all numbers and their indices in the map
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  // Second pass:
  // Check whether the required pair exists
  for (let i = 0; i < nums.length; i++) {

    // Number needed to reach the target
    let pairToFind = target - nums[i];

    // Check if the pair exists in the map
    // Also make sure we are not using the same element twice
    if (map.has(pairToFind) && map.get(pairToFind) !== i) {

      // Return the indices of the two numbers
      return [i, map.get(pairToFind)];
    }
  }

  // No valid pair found
  return [];
}

const nums = [2, 7, 11, 15];
let target = 9;

console.log(optimizedTwoSum(nums, target)); // [0, 1]