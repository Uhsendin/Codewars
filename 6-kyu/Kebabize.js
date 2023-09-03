// Modify the kebabize function so that it converts a camel case string into a kebab case.
//
// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:
//
// the returned string should only contain lowercase letters

function kebabize(str) {
  let result = '';
  let filteredStr = str
    .split('')
    .filter((char) => isNaN(Number(char)))
    .join('');

  for (let i = 0; i < filteredStr.length; i++) {
    if (filteredStr[i] === filteredStr[i].toUpperCase() && i !== 0) {
      result += '-' + filteredStr[i].toLowerCase();
    } else {
      result += filteredStr[i].toLowerCase();
    }
  }
  return result;
}
