// Reverse an array
// Given an array arr of n elements. The task is to reverse the given array. The reversal of array should be inplace.
// Input: n=5, arr = [1,2,3,4,5]  // Output: [5,4,3,2,1]


function reverseOfArray(arr){
  let start = 0;
  let end = arr.length-1;
  while(start < end){
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}
//const arr = [1,2,3,4,5];
//console.log(reverseOfArray(arr));


function bruteReverse(arr){
  let n = arr.length;
  const ans = new Array(n);
  for(let i=n-1;i>=0;i--){
    ans[n-i-1] = arr[i];
  }

  for(let i=0;i<n;i++){
    arr[i] = ans[i];
  }

  return arr;
}

const arr = [1,2,3,4,5];
console.log(bruteReverse(arr));
