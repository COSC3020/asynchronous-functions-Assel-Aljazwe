
async function countMatchesAsync(array, key) {
    let count = 0;
    // Simulating an asynchronous operation with Promise
    await Promise.resolve().then(() => {
        for (const item of array) {
            if (item === key) {
                count++;
            }
        }
    });
    return count;
}

module.exports = { countMatchesAsync };


