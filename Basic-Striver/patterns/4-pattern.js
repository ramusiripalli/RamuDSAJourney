/*
1
22
333
4444
55555
*/

// Function to print a number pattern
function pattern4(n) {

  // Outer loop controls the number of rows
  // Runs from 1 to n
  for (let i = 1; i <= n; i++) {

    // Create an empty string for the current row
    let str = "";

    // Inner loop controls how many times
    // the current row number (i) is printed
    for (let j = 1; j <= i; j++) {

      // Add the value of i to the string
      str += i;
    }

    // Print the completed row
    console.log(str);
  }
}

// Number of rows
let n = 5;

// Call the function
pattern4(n);