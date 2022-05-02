const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = [];
  let arrs2 = s2.split('');

  s1.split('').map(el => {
    if (arrs2.indexOf(el) != -1) {
      result.push(el);
      arrs2.splice(arrs2.indexOf(el), 1);
    }
  });

  console.log(result.length);
  return result.length;
}

module.exports = {
  getCommonCharacterCount
};
