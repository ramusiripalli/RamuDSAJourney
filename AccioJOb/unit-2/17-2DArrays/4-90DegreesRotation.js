function transpose(matrix){

  // Get size of square matrix
  let n = matrix.length;

  // Traverse upper triangle only
  for(let i = 0; i < n; i++){

    // Start from i+1 to avoid double swapping
    for(let j = i + 1; j < n; j++){

      // Swap matrix[i][j] with matrix[j][i]
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // Return transposed matrix
  return matrix;
}



function reverseArray(arr){

  // Get size of current row
  let n = arr.length;

  // Two pointers
  let start = 0;
  let end = n - 1;

  // Reverse manually
  while(start < end){

    // Swap first and last
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    // Move inward
    start++;
    end--;
  }

  return arr;
}




function rotate90Degrees(matrix){

  // Step 1: Transpose matrix
  transpose(matrix);


  // Step 2: Reverse every row
  for(let i = 0; i < matrix.length; i++){

    // Reverse current row
    reverseArray(matrix[i]);
  }

  // Return rotated matrix
  return matrix;
}




let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

console.log(rotate90Degrees(matrix));