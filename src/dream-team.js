const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(Arr) {
  if (Array.isArray(Arr) == false || Arr.length == 0 || Arr == null || !Arr) {
    return false
  };

  let result = Arr.filter(el => typeof(el) == "string" && el != '');
  if (result.length == 0) {
    return false
  }
  let output = []
  for (let i = 0; i < result.length; i++) {
    output.push(result[i].trim()[0].toUpperCase());
  }
  output.sort()
  return output.join('')
}

console.log(createDreamTeam(123))

module.exports = {
  createDreamTeam
};
