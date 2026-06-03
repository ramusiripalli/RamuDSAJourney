/*

*****
****
***
**
*

*/

// Function to print an inverted right-angled triangle pattern
function pattern5(n) {

  // Outer loop controls the number of rows
  // Runs from 1 to n
  for (let i = 1; i <= n; i++) {

    // Create an empty string for the current row
    let str = "";

    // Inner loop controls the number of stars (*) in each row
    // As i increases, the number of stars decreases
    for (let j = 1; j <= n - i + 1; j++) {

      // Add a star to the string
      str += "*";
    }

    // Print the completed row
    console.log(str);
  }
}

// Number of rows
let n = 5;

// Call the function
pattern5(n);