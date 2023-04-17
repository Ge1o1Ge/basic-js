const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(a) {
    let count = 1
    if (a.length == 0) {
      return count;
    };
    
    for (let i = 0; i < a.length; i++) {
      if (Array.isArray(a[i])) {
        count = Math.max(1 + this.calculateDepth(a[i]), count);
      };
    };
    return count
  }
}

module.exports = {
  DepthCalculator
};
