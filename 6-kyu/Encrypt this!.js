/* 
Acknowledgments:

I thank yvonne-liu for the idea and for the example tests :)
Description:

Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

    Your message is a string containing space separated words.
    You need to encrypt each word in the message using the following rules:
        The first letter must be converted to its ASCII code.
        The second letter must be switched with the last letter
    Keepin' it simple: There are no special characters in the input.

Examples:

encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

var encryptThis = function (text) {
  const strArr = text.split(' ');
  const encryptedArr = [];

  for (let i = 0; i < strArr.length; i++) {
    const word = strArr[i];
    const wordArr = word.split('');
    const code = wordArr[0].charCodeAt(0);

    if (wordArr.length > 1) {
      const temp = wordArr[1];
      wordArr[1] = wordArr[wordArr.length - 1];
      wordArr[wordArr.length - 1] = temp;
    }

    wordArr.splice(0, 1, code);
    encryptedArr.push(wordArr.join(''));
  }

  return encryptedArr.join(' ');
};
