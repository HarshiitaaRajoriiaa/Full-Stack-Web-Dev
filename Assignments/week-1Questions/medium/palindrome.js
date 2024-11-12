/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  for (let i = 0 ; i < str.length / 2; i++  ) {
      if(str.charAt(i).toLowerCase()!== str.charAt(str.length - 1 - i).toLowerCase() ) return false;
  }
  return true;
}

module.exports = isPalindrome;
