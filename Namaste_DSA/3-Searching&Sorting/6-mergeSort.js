/**
 * Merges two already sorted arrays
 * into a single sorted array.
 */
function mergeSortedArrays(left, right) {

  // Store the final merged result
  let result = [];

  // Pointer for left array
  let i = 0;

  // Pointer for right array
  let j = 0;

  // Compare elements from both arrays
  // and push the smaller one into result
  while (i < left.length && j < right.length) {

    // <= makes Merge Sort stable
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add remaining elements from left array
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  // Add remaining elements from right array
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

/**
 * Merge Sort
 *
 * Divide the array into two halves.
 * Recursively sort both halves.
 * Merge the sorted halves.
 */
function mergeSort(nums) {

  // Base case:
  // An array with 0 or 1 element is already sorted
  if (nums.length <= 1) {
    return nums;
  }

  // Find middle index
  let mid = Math.floor(nums.length / 2);

  // Divide array into left half
  let left = mergeSort(nums.slice(0, mid));

  // Divide array into right half
  let right = mergeSort(nums.slice(mid));

  // Merge the sorted halves
  return mergeSortedArrays(left, right);
}

const nums = [9, 2, 7, 1, 4, 5, 33, 21, 45, 18];

console.log(mergeSort(nums));