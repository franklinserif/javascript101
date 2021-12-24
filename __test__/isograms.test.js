const isIsogram = require('../src/Isograms');

describe('test isograms function', () => {
  test('Should return true if str is a isogram otherwise return false', () => {
    expect(isIsogram()).not.toBeUndefined();
    expect(isIsogram('Dermatoglyphics')).toBeTruthy();
    expect(isIsogram('isogram')).toBeTruthy();
    expect(isIsogram('aba')).toBeFalsy();
    expect(isIsogram('moOse')).toBeFalsy();
    expect(isIsogram('isIsogram')).toBeFalsy();
    expect(isIsogram('')).toBeTruthy();
  });
});
