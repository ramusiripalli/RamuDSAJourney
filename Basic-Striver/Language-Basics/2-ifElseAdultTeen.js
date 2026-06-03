// If Else Adult Teen Problem
// Given an integer age, print on the screen:

// Adult if age >= 18
// Teen if age < 18
// Do not change the case of any letter in "Adult" and "Teen" while printing the answer.


// Function to check whether a person is an Adult or Teen
function isAdult(age) {

  // Check if age is greater than or equal to 18
  if (age >= 18) {

    // If the condition is true, print "Adult"
    console.log("Adult");

  } else {

    // If the condition is false (age is less than 18),
    // print "Teen"
    console.log("Teen");
  }
}

// Store the age value in a variable
let age = 27;

// Call the function and pass the age variable as an argument
isAdult(age);