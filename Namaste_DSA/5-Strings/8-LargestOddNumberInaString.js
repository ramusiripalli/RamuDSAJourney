function LargestOddNumber(str) {

  // Start checking from the last digit
  // because we want the largest odd-numbered prefix
  for (let i = str.length - 1; i >= 0; i--) {

    // Convert current character to a number
    // and check if it is odd
    if (Number(str[i]) % 2 === 1) {

      // If an odd digit is found,
      // return the substring from index 0
      // up to and including that odd digit
      return str.slice(0, i + 1);
    }
  }

  // No odd digit found in the entire string
  return "";
}

let str = "561098";
console.log(LargestOddNumber(str));