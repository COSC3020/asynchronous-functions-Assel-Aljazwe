const { countMatches } = require('./code');

describe('countMatches', () => {
  test('correctly counts matches', async () => {
    const array = [1, 2, 3, 2, 4, 2];
    const key = 2;
    const expectedCount = 3;
    const count = await countMatches(array, key);
    expect(count).toBe(expectedCount);
  });
});
