/* Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
  const strNum = num.toString();
  const expandedNums = [];

  for (let i = 0; i < strNum.length; i++) {
    const num = Number(strNum[i]);
    if (num > 0) {
      expandedNums.push(num + "0".repeat(strNum.length - i - 1));
    }
  }
  return expandedNums.join(" + ");
}
