/**
 * Write a function that accepts an array of 10 integers (between 0 and 9),
 * that returns a string of those numbers in the form of a phone number.
 */

/**
 * format an array of numbers into a phone number
 * @param {Array} numbers
 * @return {string} phone number
 */
function createPhoneNumber(numbers) {
  return [
    '(',
    ...numbers.slice(0, 3),
    ')',
    ' ',
    ...numbers.slice(3, 6),
    '-',
    ...numbers.slice(6, 10),
  ].join('');
}

module.exports = createPhoneNumber;
