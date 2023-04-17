const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
  }

  encrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }
    let resStr = '';
    let prob = 0;
    try {
      (() => {
        str = str.toLowerCase()
        key = key.toLowerCase()

        for (let i = 0; i < str.length; i++) {
          if (97 <= str.charCodeAt(i) && str.charCodeAt(i) <= 122) {
            let j = (i - prob) % key.length;
            resStr += String.fromCharCode((str.charCodeAt(i) + key.charCodeAt(j) - 97 * 2) % 26 + 65);
          } else {
            resStr += str[i];
            prob += 1
          }
        }
      })()
      if (this.reverse) {
        return resStr
      } else {
        return resStr.split('').reverse().join('');
      }

    } catch (er) {
      throw er
    }
  }

  decrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }
    let resStr = '';
    let prob = 0;
    try {
      (() => {
        str = str.toUpperCase()
        key = key.toLowerCase()

        for (let i = 0; i < str.length; i++) {
          if (65 <= str.charCodeAt(i) && str.charCodeAt(i) <= 90) {
            let j = (i - prob) % key.length;
            resStr += String.fromCharCode((str.charCodeAt(i) - key.charCodeAt(j) + 58) % 26 + 65);
          } else {
            resStr += str[i];
            prob += 1
          }
        }
      })();
      if (this.reverse) {
        return resStr
      } else {
        return resStr.split('').reverse().join('');
      }
    } catch (er) {
      throw er
    }
  }
}

let p = new VigenereCipheringMachine();
let d = new VigenereCipheringMachine(false);
console.log(p.encrypt('Samelengthkey', 'Samelengthkey'))
console.log(d.encrypt('Samelengthkey', 'Samelengthkey'))


module.exports = {
  VigenereCipheringMachine
};
