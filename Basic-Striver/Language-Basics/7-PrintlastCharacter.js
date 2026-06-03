// Function to return the last character of a string
function PrintLastCharacter(str) {

  // str.length gives the total number of characters in the string
  // Since string indexing starts from 0,
  // the last character is at index (length - 1)
  return str[str.length - 1];
}

// Call the function and print the result
console.log(PrintLastCharacter("RamuSiripalli"));