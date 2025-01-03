/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    if(str1.length!== str2.length) return false;
    str1.toLowerCase();
    str2.toLowerCase();
    str1 = str1.split('').sort().join(''); //split the string into an array, sort it, and join it back into a string
    str2 = str2.split('').sort().join('');
    if(str1 === str2) return true;
    else return false;
}

module.exports = isAnagram;
