const assert = require('assert').strict;
const countMatchesAsync = require('./code');

async function runTests() {
  const array = [1, 2, 3, 2, 4, 2, 5];
  const keyToSearch = 2;
  const expectedCount = 3;

  const count = await countMatchesAsync(array, keyToSearch);
  assert.equal(count, expectedCount, `Expected ${expectedCount} matches, got ${count}`);

  console.log("All tests passed!");
}

runTests().catch(error => {
  console.error("Some tests failed.");
  console.error(error);
  process.exit(1);
});




