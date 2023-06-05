/* 
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
*/

function cubeOdd(arr) {
  const isNum = arr.every((num) => typeof num === 'number');
  if (isNum) {
    const cubedNums = arr.map((num) => num * num * num);
    const oddNums = cubedNums.filter((num) => num % 2 !== 0);
    return oddNums.reduce((acc, curVal) => acc + curVal, 0);
  } else {
    return undefined;
  }
}
