/* 
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

function findLongest(array) {
  let mostDigits;
  let maxDigits = 0;

  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    const digits = Math.abs(num).toString().length;

    if (digits > maxDigits) {
      maxDigits = digits;
      mostDigits = num;
    }
  }

  return mostDigits;
}
