const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")
  let arrClone = Array.from(arr);
  let result = [];
  arrClone.forEach((el) => {
    if (el == '--discard-next') {
      if (arrClone.indexOf('--discard-next') < arrClone.length - 1) {
        arrClone.splice(arrClone.indexOf('--discard-next'), 2, 'del', 'del')
      } else {
        arrClone.splice(arrClone.indexOf('--discard-next'), 1)
      }
    }
    if (el == '--discard-prev') {
      if (arrClone.indexOf('--discard-prev') > 0) {
        arrClone.splice(arrClone.indexOf('--discard-prev') - 1, 2, 'del', 'del')
      } else {
        arrClone.splice(arrClone.indexOf('--discard-prev'), 1)
      }
    }
    if (el == '--double-next') {
      if (arrClone.indexOf('--double-next') < arrClone.length - 1 && arrClone[arrClone.indexOf('--double-next') + 1] != undefined) {
        arrClone.splice(arrClone.indexOf('--double-next'), 1, arrClone[arrClone.indexOf('--double-next') + 1])
      } else {
        arrClone.splice(arrClone.indexOf('--double-next'), 1)
      }
    }
    if (el == '--double-prev') {
      if (arrClone.indexOf('--double-prev') > 0) {
        arrClone.splice(arrClone.indexOf('--double-prev'), 1, arrClone[arrClone.indexOf('--double-prev') - 1])
      } else {
        arrClone.splice(arrClone.indexOf('--double-prev'), 1)
      }
    }
    else {
      return el;
    }
  })
  arrClone.forEach(el => {
    if (el != 'del') {
      result.push(el)
    }
  });
  return result;
}

module.exports = {
  transform
};
