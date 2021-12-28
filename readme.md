### Javascript 101

:partying_face: :partying_face: :smile_cat: :smile_cat:
a personal project for javascript algorithms and problem solving,
I will add more problems solves :smile_cat:
You will find in the source code some problems found in codewars, as perhaps in other places :smirk: most of the problems vary in terms of difficulty, feel free to do pullrequest for some improvement of the code :relieved: and / or add a new problem or fork to solve them yourself.

#### Table of Contents

- [Isogram](#Isogram)
  - [solution](#Isogram-Solution)
- [vowel Count](#Vowel-Count)
  - [solution](#vowel-count-Solution)
- [create Phone Number](#Create-Phone-Number)
  - [Solution](#Create-Phone-Number-Solution)
- [Symetric Difference](#Symetric-Difference)
  - [Solution](#Symetric-Difference-Solution)

## Isogram

An isogram is a word that has no repeating letters, consecutiv or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

### **Isogram Solution**

:tada: :tada: :medal_sports: :medal_sports:

```javascript
/**
 * Return true if a string is a isogram word and false if it's not
 * @param {string} str
 * @return {boolean}
 */
function isIsogram(str) {
  if (str === '') {
    return true;
  }
  if (!str) {
    return false;
  }
  /**
   * Set only allows unique values, if the array dont have duplicates value it
   * would be same size as the original
   * */
  return new Set(str.toLowerCase().split('')).size === str.split('').length;
}
```

## Vowel Count

Return the number (count) of vowels in the given string
we will consider a, e, i, o, u as vowels for this (but not y).
the input string will only consist of lower case letters and/or spaces.

### **Vowel Count Solution**

:tada: :tada: :medal_sports: :medal_sports:

```javascript
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
```

## Create Phone Number

Write a function that accepts an array of 10 integers (between 0 and 9),
that returns a string of those numbers in the form of a phone number.

### **Create Phone Number Solution**

```javascript
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
```

## Symetric Difference

The mathematical term symmetric difference (△ or ⊕) of two sets is the set of
elements which are in either of the two sets but not in both. For example,
for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.
Symmetric difference is a binary operation, which means it operates on only two elements.
So to evaluate an expression involving symmetric differences among three elements (A △ B △ C),
you must complete one operation at a time. Thus, for sets A and B above,
and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.
Create a function that takes two or more arrays and returns an array of their
symmetric difference. The returned array must contain only unique values (no duplicates)

### **Symetric Difference Solution**

```javascript
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
```
