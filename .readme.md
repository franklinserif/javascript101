### Javascript 101
a personal project for javascript algorithms and problem solving,
I will add more problems solves :tw-1f431: :tw-1f3a9:
You will find in the source code some problems found in codewars, as perhaps in other places :tw-1f601: most of the problems vary in terms of difficulty, feel free to do pullrequest for some improvement of the code :tw-1f60c: and / or add a new problem or fork to solve them yourself.



**Table of Contents**

[TOCM]

[TOC]

##Isogram
An isogram is a word that has no repeating letters, consecutiv  or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

### **Solution**
:tw-1f389: :tw-1f38a::tw-1f389: :tw-1f38a:

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
