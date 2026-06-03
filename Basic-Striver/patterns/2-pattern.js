/*

*
**
***
****
*****

*/

// Function to print a right-angled triangle pattern using stars (*)
function pattern2(n) {

  // Outer loop controls the number of rows
  // Runs from 1 to n
  for (let i = 1; i <= n; i++) {
    
    // Create an empty string for the current row
    let str = "";

    // Inner loop controls how many stars to print in each row
    // Row 1 -> 1 star
    // Row 2 -> 2 stars
    // Row 3 -> 3 stars
    // ...
    // Row n -> n stars
    for (let j = 1; j <= i; j++) {

      // Add one star to the string
      str += "*";
    }

    // Print the completed row
    console.log(str);
  }
}

// Number of rows in the pattern
let n = 5;

// Call the function
pattern2(n);