// Complete the function that takes a string of English-language text and returns the number of consonants in the string.
//
// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.
//
//

function consonantCount(str) {
  const cases = ' 1234567890_^&$#-aeiou';
  return str.split('').filter((char) => !cases.includes(char.toLowerCase()))
    .length;
}
