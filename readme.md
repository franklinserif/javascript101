### Javascript 101

:partying_face: :partying_face: :smile_cat: :smile_cat:
a personal project for javascript algorithms and problem solving,
I will add more problems solves :smile_cat:
You will find in the source code some problems found in codewars, as perhaps in other places :smirk: most of the problems vary in terms of difficulty, feel free to do pullrequest for some improvement of the code :relieved: and / or add a new problem or fork to solve them yourself.

#### Table of Contents

- [Isogram](#Isogram)
  - [isogram solution](#Isogram-Solution)
- [vowelCount](#Vowel-Count)
  - [vowel Count solution](#vowel-count-Solution)

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
we will consider a, e, i, o, u as vowels for this Kata (but not y).
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
