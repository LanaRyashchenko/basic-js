const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *2)формула выглядит так: t(его надо найти) = (ln(MODERN_ACTIVITY/A)*HALF_LIFE_PERIOD)/ln(2);
3)A - это число которое как-то связно с углеродом, в общем это то число что нам дают. ln - натуральный логарифм
 */
function dateSample(sampleActivity) {

  if (+sampleActivity > MODERN_ACTIVITY || +sampleActivity < 0 || isNaN(sampleActivity) || typeof sampleActivity !== 'string') {
    return false;
  }

 let result = Math.ceil((Math.log(MODERN_ACTIVITY/sampleActivity)*HALF_LIFE_PERIOD)/Math.log(2));
 if (result == 'Infinity') {
  return sampleActivity;
 } return result;
}


module.exports = {
  dateSample
};
