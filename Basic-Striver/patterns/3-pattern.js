/*
1
12
123
1234
12345

*/

// Function to print a number pattern
function pattern3(n) {

  // Outer loop controls the number of rows
  // Runs from 1 to n
  for (let i = 1; i <= n; i++) {

    // Create an empty string for the current row
    let str = "";

    // Inner loop prints numbers from 1 to i
    for (let j = 1; j <= i; j++) {

      // Add the current number to the string
      str += j;
    }

    // Print the completed row
    console.log(str);
  }
}

// Number of rows
let n = 5;

// Call the function
pattern3(n);