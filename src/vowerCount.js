/**
 * Return the number (count) of vowels in the given string
 * We will consider a, e, i, o, u as vowels for this Kata (but not y).
 * The input string will only consist of lower case letters and/or spaces.
 * @param {string} word
 * @return {number}
 */
function vowelCount(word) {
  return word
    .split('')
    .reduce(
      (numberOfVowel, currentLetter) =>
        /[aeiuo]/i.test(currentLetter) ? (numberOfVowel += 1) : numberOfVowel,
      0,
    );
}

module.exports = vowelCount;
