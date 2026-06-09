function removeElement(nums, val) {

  // Pointer to track the position where
  // the next valid element should be placed
  let x = 0;

  // Loop through each element in the array
  for (let i = 0; i < nums.length; i++) {

    // Check if the current element is NOT equal
    // to the value that needs to be removed
    if (nums[i] !== val) {

      // Place the valid element at index x
      nums[x] = nums[i];

      // Move x to the next position for the next valid element
      x = x + 1;
    }
  }

  // x represents the number of elements remaining
  // after removing all occurrences of val
  return x;
}

const nums = [0, 1, 2, 2, 3, 0, 4, 2,9];
const val = 2;

// Call the function and store the new length
let result = removeElement(nums, val);

// Print the length of the array after removal
console.log("Length after removal is", result);








function bruteRemoveElement(nums, val) {

  // Create a temporary array to store
  // elements that are NOT equal to val
  let temp = [];

  // Traverse the original array
  for (let i = 0; i < nums.length; i++) {

    // If the current element is not the value
    // we want to remove, store it in temp
    if (nums[i] !== val) {
      temp.push(nums[i]);
    }
  }

  // Copy all valid elements from temp
  // back into the original array
  for (let i = 0; i < temp.length; i++) {
    nums[i] = temp[i];
  }

  // Return the number of elements
  // remaining after removal
  return temp.length;
}

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

// Call the function and store the new length
let result1 = bruteRemoveElement(nums, val);

// Print the length after removing all occurrences of val
console.log("Length after removal is", result1);