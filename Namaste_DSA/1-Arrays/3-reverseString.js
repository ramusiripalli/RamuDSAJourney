// Function to reverse an array of characters using the Two Pointer approach
function reverseString(s){

  // Pointer starting from the beginning of the array
  let left = 0;

  // Pointer starting from the end of the array
  let right = s.length - 1;

  // Continue swapping until both pointers meet or cross each other
  while(left < right){

    // Store the left element temporarily
    let temp = s[left];

    // Place the right element at the left position
    s[left] = s[right];

    // Place the stored left element at the right position
    s[right] = temp;

    // Move the left pointer one step forward
    left++;

    // Move the right pointer one step backward
    right--;
  }

  // Return the reversed array
  return s;
}

// Input array of characters
let s = ["h", "e", "l", "l", "o"];

// Print the reversed array
console.log(reverseString(s)); // ["o", "l", "l", "e", "h"]