const { countMatchesAsync } = require('./code');

test('correctly counts the number of matches', done => { // Use the done callback provided by Jest to handle asynchronous tests.
  const array = [1, 2, 3, 2, 4, 2];
  const key = 2;

  countMatchesAsync(array, key, (err, count) => {
    expect(count).toBe(3);
    done(); // Signal Jest that the asynchronous test is complete.
  });
});



