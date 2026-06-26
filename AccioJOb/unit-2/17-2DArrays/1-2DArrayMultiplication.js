// Function to multiply two square matrices
function TwoDArraySum(mat1, mat2, n) {

    // Create an empty result matrix
    let result = [];

    // Fill the result matrix with 0's
    // Initially:
    // [
    //   [0, 0],
    //   [0, 0]
    // ]
    for (let i = 0; i < n; i++) {
        result.push(Array(n).fill(0));
    }

    // Traverse each row of the first matrix
    for (let i = 0; i < n; i++) {

        // Traverse each column of the second matrix
        for (let j = 0; j < n; j++) {

            // Traverse through the current row and column
            // to calculate one element of the result matrix
            for (let k = 0; k < n; k++) {

                // Multiply corresponding elements
                // mat1 row × mat2 column
                result[i][j] += mat1[i][k] * mat2[k][j];

            }
        }
    }

    // Return the final multiplied matrix
    return result;
}

// First matrix
let mat1 = [
    [1, 2],
    [3, 4]
];

// Second matrix
let mat2 = [
    [5, 6],
    [7, 8]
];

// Size of the square matrix
let n = 2;

// Call the function
let resultMatrix = TwoDArraySum(mat1, mat2, n);

// Print the result
console.log(resultMatrix);