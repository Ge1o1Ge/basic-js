const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  length: 0,
  elements: [],

  getLength() {
    return this.length
  },
  addLink(value) {
    this.elements.push(String(value));
    this.length += 1;
    return this
  },
  removeLink(ind) {
    try {
      (() => {
        if (!this.elements[ind - 1]) {
          throw new Error('You can\'t remove incorrect link!');
        }
        this.length -= 1;
        this.elements.splice(ind - 1, 1);
      })();
      return this
    } catch (er) {
      this.elements = [];
      this.length = 0
      throw er;
    }  
  },
  reverseChain() {
    this.elements.reverse()
    return this
  },
  finishChain() {
    const result = '( ' + this.elements.join(' )~~( ') + ' )'
    this.elements = [];
    this.length = 0
    return result
  },
};

console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain())
console.log('( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )')

module.exports = {
  chainMaker
};
