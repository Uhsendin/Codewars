/* 
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
Examples

    "foefet" is an anagram of "toffee"

    "Buckethead" is an anagram of "DeathCubeK"
*/

const isAnagram = function (test, original) {
  test = test.toLowerCase();
  original = original.toLowerCase();
  const charCount = {};

  if (test.length !== original.length) {
    return false;
  }

  for (const char of test) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of original) {
    if (!charCount[char]) {
      return false;
    }

    charCount[char]--;
  }

  return true;
};
