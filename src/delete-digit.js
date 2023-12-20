const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
 let nArr = n.toString().split('');
 let workArr = nArr;
 let newArr = [];

  if (workArr.length == 1) {
    return +workArr;
  }
  else if (workArr.length == 2) {
    const indexM = workArr.indexOf(Math.min(...workArr).toString());
    delete workArr[indexM];
    newArr.push(workArr.join(''));
  }

  else if (workArr.length > 2) {
    let partArr = workArr.slice(0, workArr.length-1);
    let mmmm = Math.min(...partArr).toString();
    const indexL = workArr.indexOf(mmmm);
    delete workArr[indexL];
    newArr.push(workArr.join(''));
    }
    return +newArr;
}

module.exports = {
  deleteDigit
};
