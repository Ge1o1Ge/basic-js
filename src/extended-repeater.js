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
  let newstr = '';
  let substr;
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  } 

  if (options.separator === undefined) {
    options.separator = '+';
  } 

  if (options.addition === undefined) {
    options.addition = '';
  }

  substr = String(str) + String(options.addition);

  for (let j = 1; j <options.additionRepeatTimes; j++) {
    substr += String(options.additionSeparator) + String(options.addition);
  }
  

  newstr = substr;
  for (let i = 1; i < options.repeatTimes; i++) {
    newstr += String(options.separator) + substr;
  }

  return newstr
}

console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }))
console.log('nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null')
module.exports = {
  repeater
};
