function countMatchesAsync(array, key) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const count = array.reduce((acc, item) => acc + (item === key ? 1 : 0), 0);
      resolve(count);
    }, 0); // Using setTimeout with 0 ms to simulate an asynchronous operation
  });
}




