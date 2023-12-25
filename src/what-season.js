const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {

  if (date == undefined) {
    return 'Unable to determine the time of year!';
  }

  else if (date.hasOwnProperty('toString') || (!(date instanceof Date))) {
    throw new Error ('Invalid date!');
  }

  let getGGG = '';
  const yyyy = date.getFullYear();
  const mm = date.getMonth();
const dd = date.getDate();

  getGGG = `${yyyy}` + '\\' + `${mm}` + '\\' + `${dd}`;

  date = date.toString();

  if (date.includes('Jan') || date.includes('Feb') || date.includes('Dec')) {
    return 'winter';
  }
  else if (date.includes('Mar') || date.includes('Apr') || date.includes('May')) {
    return 'spring';
  }
  else if (date.includes('Jun') || date.includes('Jul') || date.includes('Aug')) {
    return 'summer';
  }
  else if (date.includes('Sep') || date.includes('Oct') || date.includes('Nov')) {
    return 'autumn';
  }


}
//getSeason();

module.exports = {
  getSeason
};
