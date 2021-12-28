/* The mathematical term symmetric difference (△ or ⊕) of two sets is the set of
 * elements which are in either of the two sets but not in both. For example,
 * for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.
 * Symmetric difference is a binary operation, which means it operates on only two elements.
 * So to evaluate an expression involving symmetric differences among three elements (A △ B △ C),
 * you must complete one operation at a time. Thus, for sets A and B above,
 * and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.
 * Create a function that takes two or more arrays and returns an array of their
 * symmetric difference. The returned array must contain only unique values (no duplicates)
 **/

/**
 * Returns the values ​​that are not repeated
 * in the arrays that are passed as an argument
 * into a new Array
 * @param {arguments}
 * @returns {array}
 */
function getSytemtricDifference() {
  let arrays = [];

  //insert arrays from arguments into arrays[] variable
  for (let array of arguments) {
    arrays.push(array);
  }

  // Return an array with unique values
  return [
    ...new Set(
      arrays
        // iterate on each array and return a new array
        .map((array, index) => {
          // filter each array
          return array.filter(
            (element) =>
              /** if index (array from map) is not the same as j (array from some)
               * and if it don't have the value, it will return true and
               * the element from filter will return
               **/
              !arrays.some((a, j) => index !== j && a.indexOf(element) >= 0),
          );
        })
        // return an array without sub arrays
        .flat(),
    ),
  ];
}

module.exports = getSytemtricDifference;
