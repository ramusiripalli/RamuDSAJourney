/*
*****
*****
*****
*****
*****
*/


// Function to print a square pattern of stars (*)
function pattern1(n) {

  // Outer loop controls the number of rows
  // Runs from 1 to n
  for (let i = 1; i <= n; i++) {

    // Create an empty string for the current row
    let str = "";

    // Inner loop controls the number of columns
    // Runs from 1 to n
    for (let j = 1; j <= n; j++) {

      // Add one star (*) to the string
      str += "*";
    }

    // Print the completed row
    console.log(str);
  }
}

// Size of the pattern
let n = 5;

// Call the function
pattern1(n);