function bruteTransposeOfmatrix(matrix){

    // Get size of matrix (3 for 3x3)
    let n = matrix.length;

    // Create empty result matrix
    let result = [];

    // Step 1: Fill result matrix with 0s
    // If n = 3
    // result = [
    //   [0,0,0],
    //   [0,0,0],
    //   [0,0,0]
    // ]
    for(let i = 0; i < n; i++){
        result.push(Array(n).fill(0));
    }


    // Step 2: Traverse original matrix
    for(let i = 0; i < n; i++){

        // Traverse each column
        for(let j = 0; j < n; j++){

            // Swap row and column position
            // (i,j) ---> (j,i)
            result[j][i] = matrix[i][j];
        }
    }

    // Return transposed matrix
    return result;
}


// Input matrix
let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

//console.log(bruteTransposeOfmatrix(matrix));
// Time Complexity  : O(n²)
// Space Complexity : O(n²)


function optimizedTransposeOfMatrix(matrix){

  // Get number of rows (for 3x3, n = 3)
  let n = matrix.length;

  // Traverse row by row
  for(let i = 0; i < n; i++){

    // Start from i+1
    // so we only check upper half of matrix
    for(let j = i + 1; j < n; j++){

      // Store current value temporarily
      let temp = matrix[i][j];

      // Swap values
      matrix[i][j] = matrix[j][i];

      // Put temp value in opposite position
      matrix[j][i] = temp;
    }
  }

  // Return same modified matrix
  return matrix;
}

console.log(optimizedTransposeOfMatrix(matrix))