// Check if the Array is Sorted I

// Given an array arr of size n, the task is to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order. If the array is sorted then return True, else return False.

// Input: n = 5, arr = [1,2,3,4,5]   // Output: True


function checkIfArrayIsSorted(arr){
for(let i=0;i<arr.length-1;i++){
  if(arr[i] > arr[i+1]){
return false;
  }
}
return true;
}

const arr = [1,2,3,4,5];
console.log(checkIfArrayIsSorted(arr));