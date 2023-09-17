// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.
//
// Note that the number will always be non-negative (>= 0).

function insertDash(num) {
  const str = num.toString().split('');
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (
      Number(str[i] % 2 === 1 && Number(str[i + 1]) % 2 === 1) &&
      str[i] !== '0' &&
      str[i + 1] !== '0'
    ) {
      result += str[i] + '-';
    } else {
      result += str[i];
    }
  }
  return result;
}
