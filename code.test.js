const { countMatchesAsync } = require('./code');

test('correctly counts the number of matches', async () => {
  const array = [1, 2, 3, 2, 4, 2];
  const key = 2;
  const expectedCount = 3;

  const count = await countMatchesAsync(array, key);
  expect(count).toBe(expectedCount);
});


