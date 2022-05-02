const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let arrayNull = [];
  let sum = 0;
  matrix.forEach(el => {
    el.map((el, k) => {
      if (el === 0) {
        arrayNull.push(k)
      }
      if (arrayNull.indexOf(k) == -1) {
        sum += el;
      }
    })
  })
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
