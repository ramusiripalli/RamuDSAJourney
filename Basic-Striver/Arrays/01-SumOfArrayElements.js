// Given an array arr of size n, the task is to find the 
// sum of all the elements in the array.

// Example 1

// Input: n=5,


const arr = [1,2,3,4,5]


function sum(arr){
let sum = 0;
for(let i=0;i<arr.length;i++){
  sum += arr[i];
}
return sum;
}

console.log(sum(arr));


// function sum(arr){
//   return arr.reduce((acc,curr)=>{
//     return acc+curr;
//   },0);
// }

console.log(sum(arr));