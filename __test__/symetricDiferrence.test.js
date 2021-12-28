const getSytemtricDifference = require('../src/symetricDiferrence');

describe('Test symetric difference function', () => {
  test('It should return the non-repeated numbers into an new array', () => {
    expect(getSytemtricDifference([1, 2, 5], [2, 3, 5], [3, 4, 5]).length).toBe(
      2,
    );
    expect(getSytemtricDifference([1, 2, 3], [5, 2, 1, 4])).toStrictEqual([
      3, 5, 4,
    ]);
    expect(
      getSytemtricDifference(
        [3, 3, 3, 2, 5],
        [2, 1, 5, 7],
        [3, 4, 6, 6],
        [1, 2, 3],
      ),
    ).toStrictEqual([7, 4, 6]);
    expect(
      getSytemtricDifference(
        [3, 3, 3, 2, 5],
        [2, 1, 5, 7],
        [3, 4, 6, 6],
        [1, 2, 3],
        [5, 3, 9, 8],
        [1],
      ),
    ).toStrictEqual([7, 4, 6, 9, 8]);
  });
});
