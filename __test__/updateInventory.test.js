const updateInventory = require('../src/updateInventory');

describe('add a new item if the arr1 doesnt have it', () => {
  test('', () => {
    expect(
      updateInventory(
        [
          [21, 'Bowling Ball'],
          [2, 'Dirty Sock'],
          [1, 'Hair Pin'],
          [5, 'Microphone'],
        ],
        [
          [2, 'Hair Pin'],
          [3, 'Half-Eaten Apple'],
          [67, 'Bowling Ball'],
          [7, 'Toothpaste'],
        ],
      ).length,
    ).toBe(6);

    expect(
      updateInventory(
        [
          [21, 'Bowling Ball'],
          [2, 'Dirty Sock'],
          [1, 'Hair Pin'],
          [5, 'Microphone'],
        ],
        [
          [2, 'Hair Pin'],
          [3, 'Half-Eaten Apple'],
          [67, 'Bowling Ball'],
          [7, 'Toothpaste'],
        ],
      ),
    ).toStrictEqual([
      [88, 'Bowling Ball'],
      [2, 'Dirty Sock'],
      [3, 'Hair Pin'],
      [3, 'Half-Eaten Apple'],
      [5, 'Microphone'],
      [7, 'Toothpaste'],
    ]);

    expect(
      updateInventory(
        [
          [21, 'Bowling Ball'],
          [2, 'Dirty Sock'],
          [1, 'Hair Pin'],
          [5, 'Microphone'],
        ],
        [],
      ),
    ).toStrictEqual([
      [21, 'Bowling Ball'],
      [2, 'Dirty Sock'],
      [1, 'Hair Pin'],
      [5, 'Microphone'],
    ]);

    expect(
      updateInventory(
        [],
        [
          [2, 'Hair Pin'],
          [3, 'Half-Eaten Apple'],
          [67, 'Bowling Ball'],
          [7, 'Toothpaste'],
        ],
      ),
    ).toStrictEqual([
      [67, 'Bowling Ball'],
      [2, 'Hair Pin'],
      [3, 'Half-Eaten Apple'],
      [7, 'Toothpaste'],
    ]);
  });
});
