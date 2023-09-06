// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.
//
// For example:
//
//     dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
//
//     dup(["kelless","keenness"]) = ["keles","kenes"].
//
// Strings will be lowercase only, no spaces. See test cases for more examples.
//
// Good luck!

function dup(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    let word = '';
    for (let j = 0; j < s[i].length; j++) {
      if (s[i][j] !== s[i][j + 1]) {
        word += s[i][j];
      }
    }
    arr.push(word);
  }
  return arr;
}
