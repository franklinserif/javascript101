const permAlone = require('../src/permAlone');

describe('Test the permutation function', () => {
  test('It should return the total of permutations of the provided string or type', () => {
    expect(typeof permAlone('aab')).toBe('number');
    expect(permAlone('aab')).toBe(2);
    expect(permAlone('aaa')).toBe(0);
    expect(permAlone('aaab')).toBe(0);
    expect(permAlone('abcdefa')).toBe(3600);
    expect(permAlone('zzzzzzzz')).toBe(0);
    expect(permAlone('a')).toBe(1);
  });
});
