function spiralMatrix(matrix) {

  // Get number of rows
  let rows = matrix.length;

  // Get number of columns
  let cols = matrix[0].length;

  // Boundaries
  let top = 0;              // first row
  let bottom = rows - 1;   // last row
  let left = 0;            // first column
  let right = cols - 1;    // last column

  // Store final spiral order
  let result = [];

  // Continue until boundaries cross
  while (left <= right && top <= bottom) {

    // 1. Traverse Top Row (left → right)
    for (let col = left; col <= right; col++) {
      result.push(matrix[top][col]);
    }
    top++;   // move top boundary down


    // 2. Traverse Right Column (top → bottom)
    for (let row = top; row <= bottom; row++) {
      result.push(matrix[row][right]);
    }
    right--;   // move right boundary left


    // 3. Traverse Bottom Row (right → left)
    // Check if row still exists
    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        result.push(matrix[bottom][col]);
      }
      bottom--;   // move bottom boundary up
    }


    // 4. Traverse Left Column (bottom → top)
    // Check if column still exists
    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
        result.push(matrix[row][left]);
      }
      left++;   // move left boundary right
    }
  }

  return result;
}



// Input
let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

console.log(spiralMatrix(matrix));