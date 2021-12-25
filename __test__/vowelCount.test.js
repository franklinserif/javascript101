const vowelCount = require('../src/vowerCount');

describe('test vowelCount function', () => {
  test('should return the numbers of vowel in the given string', () => {
    expect(vowelCount('abracadabra')).toBe(5);
    expect(vowelCount('Aba')).toBe(2);
    expect(vowelCount('franklinserif')).toBe(4);
    expect(vowelCount('Yosefin')).toBe(3);
  });
});
