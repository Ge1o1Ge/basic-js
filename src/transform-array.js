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
function transform(Arr) {
  function mak(Arr) {
    if (!Array.isArray(Arr)) {
      throw new Error('\'arr\' parameter must be an instance of the Array!');
    }

    let result = []
    let lustPrevDel, lustNextDel;
    for (let i = 0; i < Arr.length; i++) {
      if (Arr[i] == '--discard-next') {
        lustNextDel = i + 1;
        i++;
      } else if (Arr[i] == '--discard-prev') {
        if (i - 1 != lustNextDel && i - 1 != lustPrevDel && result) {
          lustPrevDel = i - 1;
          result.pop()
        }
      } else if (Arr[i] == '--double-next') {
        if (Arr[i + 1] && i + 1 != lustNextDel) {
          result.push(Arr[i + 1]);
        }
      } else if (Arr[i] == '--double-prev') {
        if (Arr[i - 1] && i - 1 != lustNextDel && i - 1 != lustPrevDel) {
          result.push(Arr[i - 1]);
        }
      } else if (i != lustNextDel && i != lustPrevDel) {
        result.push(Arr[i]);
      }
    }
    return result
  }
  let res
  try {
    res = mak(Arr);
    return res
  }
  catch (er) {
    throw er;
  }
}

module.exports = {
  transform
};
