// Count of odd numbers in array
// Given an array of n elements. The task is to return the count of the number of odd numbers in the array.

// Input: n=5, array = [1,2,3,4,5]    // Output: 3

function countOddNumbers(arr){
  let count = 0;
  for(let i=0;i<arr.length;i++){
    if(arr[i] % 2 === 1){
      count = count + 1;
    }
  }

  return count;
}

const arr = [1,2,3,4,5];
console.log(countOddNumbers(arr));