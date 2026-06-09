/**
 * Insertion Sort
 *
 * Idea:
 * - Assume the first element is already sorted.
 * - Pick the next element.
 * - Insert it into its correct position
 *   in the sorted portion of the array.
 * - Repeat until the entire array is sorted.
 */

function insertionSort(nums) {

  // Length of the array
  let n = nums.length;

  // Start from index 1 because
  // the first element is considered sorted
  for (let i = 1; i < n; i++) {

    // Current element to be inserted
    let curr = nums[i];

    // Index of the previous element
    let prev = i - 1;

    // Shift larger elements one position to the right
    while (prev >= 0 && nums[prev] > curr) {

      nums[prev + 1] = nums[prev];

      prev--;
    }

    // Insert current element
    // into its correct position
    nums[prev + 1] = curr;
  }

  return nums;
}

const nums = [7, 4, 3, 5, 1, 2];

console.log(insertionSort(nums));