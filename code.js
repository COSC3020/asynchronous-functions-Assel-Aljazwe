function countMatchesAsync(array, key) {
  return new Promise((resolve) => {
    let count = 0;
    for (const item of array) {
      if (item === key) {
        count++;
      }
    }
    resolve(count);
  });
}

module.exports = { countMatchesAsync };
