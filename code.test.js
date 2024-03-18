const { countMatchesAsync } = require('./code');

test('correctly counts the number of matches', (done) => { 
  const array = [1, 2, 3, 2, 4, 2];
  const key = 2;
  const expectedCount = 3;

  countMatchesAsync(array, key, (err, count) => {
    expect(count).toBe(expectedCount);
    done(); 
  });
});



