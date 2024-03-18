function countMatchesAsync(array, key, callback) {
    setImmediate(() => {
        const count = array.reduce((acc, item) => acc + (item === key ? 1 : 0), 0);
        callback(null, count);
    });
}

module.exports = { countMatchesAsync };






