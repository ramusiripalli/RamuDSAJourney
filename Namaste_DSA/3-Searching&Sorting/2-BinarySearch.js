/**
 * Binary Search
 * Works only on a sorted array.
 * Returns the index of the target if found.
 * Returns -1 if the target is not found.
 */

function binarySearch(nums, target) {

  // Starting index
  let start = 0;

  // Ending index
  let end = nums.length - 1;

  // Continue searching while start does not cross end
  while (start <= end) {

    // Find the middle index
    let mid = Math.floor((start + end) / 2);

    // Target found
    if (nums[mid] === target) {
      return mid;
    }

    // Target is on the right side
    else if (nums[mid] < target) {
      start = mid + 1;
    }

    // Target is on the left side
    else {
      end = mid - 1;
    }
  }

  // Target not found
  return -1;
}

// Sorted array
const nums = [-1, 0, 3, 5, 9, 12];

// Element to search
let target = -19;

// Print result
console.log(binarySearch(nums, target)); // Output: -1