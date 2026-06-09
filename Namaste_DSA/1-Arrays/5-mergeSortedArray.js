function BruteMergeSortedArray(nums1, nums2, m, n) {

  // Copy all elements from nums2
  // into the empty positions of nums1
  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }

  // Sort the entire array in ascending order
  return nums1.sort((a, b) => a - b);
}

// Input arrays
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;

let nums2 = [2, 5, 6];
let n = 3;

// Output: [1, 2, 2, 3, 5, 6]
//console.log(BruteMergeSortedArray(nums1, nums2, m, n));





function optimalMergeSortedArray(nums1,nums2,m,n){
  let nums1Copy = nums1.slice(0,m);

  let i=0;j=0;k=0;
  while(i < m && j<n){
    if(nums1Copy[i] < nums2[j]){
      nums1[k] = nums1Copy[i];
      i++;
    }else{
      nums1[k] = nums2[j];
      j++;
    }
    k++;
  }

  while( i < m){
    nums1[k] = nums1Copy[i];
    i++;
    k++;
  }
  while( j < n){
    nums1[k] = nums2[j];
    j++;
    k++;
  }

  return nums1;
}

console.log(optimalMergeSortedArray(nums1,nums2,m,n));