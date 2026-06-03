// If ElseIf

// Given marks of a student, print on the screen:

// Grade A if marks >= 90
// Grade B if marks >= 70
// Grade C if marks >= 50
// Grade D if marks >= 35
// Fail, otherwise.

// Function to determine a student's grade based on marks
function studentGrade(marks) {

  // If marks are 90 or above, assign Grade A
  if (marks >= 90) {
    console.log("Grade A");
  }

  // If marks are less than 90 but 70 or above, assign Grade B
  else if (marks >= 70) {
    console.log("Grade B");
  }

  // If marks are less than 70 but 50 or above, assign Grade C
  else if (marks >= 50) {
    console.log("Grade C");
  }

  // If marks are less than 50 but 35 or above, assign Grade D
  else if (marks >= 35) {
    console.log("Grade D");
  }

  // If marks are less than 35, the student fails
  else {
    console.log("Fail");
  }
}

// Store the student's marks in a variable
let marks = 78;

// Call the function and pass the marks value
studentGrade(marks);