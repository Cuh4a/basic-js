const {
    NotImplementedError
} = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    let obj = {};
    let arr = domains.slice();
    arr.map(el => el.split('.').reverse().map(el => `.${el}`))
        .forEach(arr => arr.reduce((acc, item) => {
            if (obj[acc + item]) {
                obj[acc + item] = obj[acc + item] + 1;
                return acc + item;
            }
            obj[acc + item] = 1;
            return acc + item;
        }, ''));
    return obj;
}


module.exports = {
    getDNSStats
};