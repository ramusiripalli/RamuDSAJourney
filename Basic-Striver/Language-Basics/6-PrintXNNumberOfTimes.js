// Print X N numbers of times
// Given two integers X and N, print the value X on the screen N times.


// Example 1 // Input: X = 7, N = 5 // Output: 7 7 7 7 7

// Function to print a value X, N number of times
function PrintXNNumberOfTimes(X, N) {

  // Create an empty string to store the result
  let str = "";

  // Loop from 1 to N
  for (let i = 1; i <= N; i++) {

    // Add X followed by a space to the string
    str += X + " ";
  }

  // Print the final string
  console.log(str);
}

// Call the function
// Print 7, 5 times
PrintXNNumberOfTimes(7, 5);