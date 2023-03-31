/* 
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.
*/

function divCon(x) {
  let numResult = 0;
  let strResult = 0;
  x.forEach((item) => {
    if (typeof item === "number") {
      numResult += item;
    } else {
      strResult += Number(item);
    }
  });
  return numResult - strResult;
}
