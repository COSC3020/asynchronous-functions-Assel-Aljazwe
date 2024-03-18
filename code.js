const async = require('async');

function countMatchesAsync(array, key, callback) {
    let count = 0;

    async.eachSeries(array, (item, cb) => {
        if (item === key) {
            count++;
        }
        cb(); // proceed to the next item
    }, (err) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, count);
        }
    });
}

module.exports = { countMatchesAsync };





