// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.
//
// Note: no empty arrays will be given.
// Examples
//
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr) {
  const freqCount = {};

  for (const num of arr) {
    freqCount[num] = (freqCount[num] || 0) + 1;
  }

  let maxFreq = 0;
  let maxFreqNum = -Infinity;

  for (const [num, freq] of Object.entries(freqCount)) {
    const numInt = parseInt(num);

    if (freq > maxFreq || (freq === maxFreq && numInt > maxFreqNum)) {
      maxFreq = freq;
      maxFreqNum = numInt;
    }
  }

  return maxFreqNum;
}
