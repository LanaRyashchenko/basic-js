const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = options;
  let newAddition = '';
  let newStr = '';

    for (let i = 1; i <= additionRepeatTimes; i++) {
      if (i == additionRepeatTimes) {
        newAddition = newAddition + (addition+'');
      } else {
      newAddition = newAddition + (addition+'') + additionSeparator;
      }
    }
    for (let j = 1; j <= repeatTimes; j++) {
        if (j == repeatTimes) {
          newStr = newStr + str + newAddition;
        } else {
          newStr = newStr + str + newAddition + separator;
        }
    }
      return newStr;
    }


module.exports = {
  repeater
};
