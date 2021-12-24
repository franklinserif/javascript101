/**
 * An isogram is a word that has no repeating letters, consecutive
 * or non-consecutive. Implement a function that determines whether
 * a string that contains only letters is an isogram. Assume the empty
 * string is an isogram. Ignore letter case.
 */

/**
 * Return true if a string is a isogram word and false if it's not
 * @param {string} str
 * @returns {boolean}
 */
function isIsogram(str) {
  if (str === "") {
    return true;
  }
  if (!str) {
    return false;
  }
  //Set only allows unique values, if the array dont have duplicates value it would be same size as the original
  return new Set(str.toLowerCase().split('')).size === str.split('').length;

}

//export function
module.exports = isIsogram;
