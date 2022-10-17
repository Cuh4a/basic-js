const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 const encodeLine = ([...str]) => {
    for (let i = str.length - 1; i >= 1; i--) {
      if (str[i][0] === str[i - 1][0]) {
        str[i - 1] += str[i];
        str.splice(i, 1);
      }
    }
    return str.map(item => item.length > 1 ? item.length + item[0] : item).join('');
  }

module.exports = {
  encodeLine
};
