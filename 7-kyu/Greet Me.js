/* 
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/

var greet = function (name) {
  name = name.toLowerCase();
  let firstLetter = name.charAt(0);
  firstLetter = firstLetter.toUpperCase();
  return `Hello ${firstLetter + name.slice(1)}!`;
};
