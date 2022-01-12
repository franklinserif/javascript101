/**
 * Return the number of total permutations of the provided string
 * that don't have repeated consecutive letters. Assume that all
 * characters in the provided string are each unique.
 *
 * For example, aab should return 2 because it has 6 total
 * permutations (aab, aab, aba, aba, baa, baa), but only 2 of
 * them (aba and aba) don't have the same letter (in this case a) repeating.
 */

/**
 * it check if a word haves permutations and if it have it, it will
 * return the number of it
 * @param {string} word
 * @return {number}
 */

function permAlone(word) {
  const lettersArr = word.split('');
  const output = [];

  /**
   * change the position of indexA to indexB in letters array
   * and viceversa
   *
   * @param {array} letters
   * @param {number} indexA
   * @param {number} indexB
   * @return {void}
   */
  const SwapIntPlace = (letters, indexA, indexB) => {
    const temp = letters[indexA];
    letters[indexA] = letters[indexB];
    letters[indexB] = temp;
  };

  /**
   * checks if an array has sequentially repeated letters
   * it will return true if not it will return true otherwise false
   * @param {array} wordArr
   * @return {boolean}
   */
  const hasNotRepeatedLetters = (wordArr) => {
    let isRepeated = true;
    wordArr.forEach((letter, index) => {
      if (letter === wordArr[index + 1]) {
        isRepeated = false;
      }
    });

    return isRepeated;
  };

  /**
   *  Heap's algorithms for do all possible combinations, for mor information
   * visits https://es.wikipedia.org/wiki/Algoritmo_de_Heap
   * @param {number} n
   * @param {array} heapLetters
   */
  const heapAlgorithms = (n, heapLetters) => {
    if (n === 1) {
      if (hasNotRepeatedLetters(heapLetters)) {
        output.push(heapLetters.join(''));
      }
      return;
    }

    heapAlgorithms(n - 1, heapLetters);

    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) {
        SwapIntPlace(heapLetters, i, n - 1);
      } else {
        SwapIntPlace(heapLetters, 0, n - 1);
      }

      heapAlgorithms(n - 1, heapLetters);
    }
  };

  heapAlgorithms(lettersArr.length, lettersArr);

  return output.length;
}

module.exports = permAlone;
