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
 let str1 = Array.from(s1);
 let str2 = Array.from(s2);
let counter = 0;
 for (let i = 0; i < str1.length; i++) {
    if(str2.includes(str1[i])) {
      let indexStr = str2.indexOf(str1[i]);
      str2[indexStr] = 'done';
      counter++;
    }
 } return counter;
}

module.exports = {
  getCommonCharacterCount
};
