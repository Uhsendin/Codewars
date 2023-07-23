// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:
//
// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
//
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':
//
// total1 = 656667
//               ^
// total2 = 656661
//               ^
//
// Then return the difference between the sum of the digits in total1 and total2:
//
//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6
//
//

function calc(x) {
  const total1 = x
    .split('')
    .map((letter) => letter.charCodeAt())
    .join('');
  const total2 = total1
    .split('')
    .map((num) => (num === '7' ? '1' : num))
    .join('');

  const sum1 = Array.from(total1).reduce(
    (acc, curVal) => acc + Number(curVal),
    0,
  );
  const sum2 = Array.from(total2).reduce(
    (acc, curVal) => acc + Number(curVal),
    0,
  );
  return sum1 - sum2;
}
