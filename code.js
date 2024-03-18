function countMatchesAsync(array, key) {
  return new Promise((resolve) => {
    let count = 0;
    array.forEach((item) => {
      if (item === key) count++;
    });
    resolve(count);
  });
}

module.exports = countMatchesAsync;






