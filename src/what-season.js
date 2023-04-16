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
function getSeason(date, ...rest) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (new Date(date) == undefined || !date) {
    throw new Error('Invalid date!');
  }

  let Arr = [date, ...rest]
  let newDate = new Date(Arr.slice(0, 3));

  function gMo(date) {
    if (date == 'Invalid Date') {
      throw new Error('Invalid date!');
    }

    if (date.getMonth() < 2 || date.getMonth() == 11) { return "winter" }
    else if (5 > date.getMonth()) { return "spring" }
    else if (8 > date.getMonth()) { return "summer" }
    else if (11 > date.getMonth()) { return "autumn" };
  }

  try {
    let f = gMo(newDate)
    return f;
  }
  catch (e) {
    return e.message;
  }

}

let dT = new Date(840, 0, 6, 9, 20, 31, 683)
console.log(getSeason('fff'))

module.exports = {
  getSeason
};
