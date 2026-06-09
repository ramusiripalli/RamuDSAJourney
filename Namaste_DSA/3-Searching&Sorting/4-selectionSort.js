/**
 * Selection Sort
 *
 * Idea:
 * - Find the smallest element from the unsorted part of the array.
 * - Place it at its correct position.
 * - Repeat for the remaining elements.
 *
 * Time Complexity:
 * - Best Case: O(n²)
 * - Average Case: O(n²)
 * - Worst Case: O(n²)
 *
 * Space Complexity:
 * - O(1) (In-place sorting)
 */

function selectionSort(nums) {

  // Outer loop determines the position where
  // the next smallest element should be placed
  for (let i = 0; i < nums.length - 1; i++) {

    // Assume current index contains the minimum value
    let minIndex = i;

    // Find the actual minimum element
    // in the remaining unsorted portion
    for (let j = i + 1; j < nums.length; j++) {

      // Update minIndex if a smaller element is found
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }

    // Swap only if a smaller element was found
    if (minIndex !== i) {
      let temp = nums[minIndex];
      nums[minIndex] = nums[i];
      nums[i] = temp;
    }
  }

  // Return the sorted array
  return nums;
}

// Sample array
const nums = [9, 34, 29, 2, 4, 88, 34];

// Print sorted array
console.log(selectionSort(nums));