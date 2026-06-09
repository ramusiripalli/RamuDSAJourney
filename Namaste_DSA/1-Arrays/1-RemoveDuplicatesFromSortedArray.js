// leetcode  https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/ 26

// Function to remove duplicates from a sorted array
// and return the count of unique elements
function removeDuplicatesFromSortedArray(nums) {

  // Store the length of the array
  let length = nums.length;

  // uniqueIndex points to the position
  // where the next unique element should be placed
  let uniqueIndex = 0;

  // Start from index 1 because the first element
  // is always considered unique
  for (let i = 1; i < length; i++) {

    // If the current element is different from
    // the last unique element found
    if (nums[i] !== nums[uniqueIndex]) {

      // Move uniqueIndex to the next position
      uniqueIndex = uniqueIndex + 1;

      // Place the new unique element at uniqueIndex
      nums[uniqueIndex] = nums[i];
    }
  }

  // Number of unique elements is uniqueIndex + 1
  return uniqueIndex + 1;
}

// Sorted input array
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// Call the function and print the result
console.log(removeDuplicatesFromSortedArray(nums));