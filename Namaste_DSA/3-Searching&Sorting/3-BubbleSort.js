/**
 * Bubble Sort
 *
 * Repeatedly compares adjacent elements
 * and swaps them if they are in the wrong order.
 */

function bubbleSort(nums) {

  // Number of passes
  for (let i = 0; i < nums.length - 1; i++) {

    // Track whether any swap happened
    let isSwapped = false;

    // Compare adjacent elements
    for (let j = 0; j < nums.length - i - 1; j++) {

      // Swap if left element is greater
      if (nums[j] > nums[j + 1]) {

        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;

        isSwapped = true;
      }
    }

    // If no swaps happened,
    // array is already sorted
    if (!isSwapped) {
      break;
    }
  }

  return nums;
}

const nums = [56, 87, 2, 5, 9, 10];
console.log(bubbleSort(nums));  

//best case - 0(n);