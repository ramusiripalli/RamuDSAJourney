
// Function to print the day name based on the day number
function DayOfWeek(day) {

  // switch compares the value of 'day'
  // with each case one by one
  switch(day) {

    // If day is 1
    case 1:
      console.log("Monday");
      break; // Exit the switch block

    // If day is 2
    case 2:
      console.log("Tuesday");
      break;

    // If day is 3
    case 3:
      console.log("Wednesday");
      break;

    // If day is 4
    case 4:
      console.log("Thursday");
      break;

    // If day is 5
    case 5:
      console.log("Friday");
      break;

    // If day is 6
    case 6:
      console.log("Saturday");
      break;

    // If day is 7
    case 7:
      console.log("Sunday");
      break;

    // Runs when none of the above cases match
    default:
      console.log("Invalid");
  }
}

// Store the day number
let day = -1;

// Call the function
DayOfWeek(day); //Invalid