/* 
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/

function removeDuplicateWords(s) {
  const noDupes = [];
  const set1 = new Set();
  for (const word of s.split(' ')) {
    set1.add(word);
  }
  for (const item of set1.values()) {
    noDupes.push(item);
  }
  return noDupes.join(' ');
}
