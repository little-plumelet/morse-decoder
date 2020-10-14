const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let i = 0;
    let arr = Array.from(expr);
    let arrLetters = [];
    let arrCodes = [];
    let count = 1;
    let str = '';
    while (i < arr.length) {
        str += arr[i];
        if (count % 10 === 0) {
          arrLetters.push(str);
          str = '';
        }
        count++;
      i++;
    }
    i = 0;
    while (i < arrLetters.length) {
      let j = 0;
      str = '';
      newStr = '';
      while (j < arrLetters[i].length) {
        str += arrLetters[i][j];
        if (arrLetters[i][j] === '*') {
            newStr = ' ';
            break;
        }
        if (Number(str) === 10 && (j + 1) % 2 === 0) {
          newStr += '.';
          str = '';
        }
        else if (Number(str) === 11  && (j + 1) % 2 === 0) {
          newStr += '-';
          str = '';
        }
        j++;
        }
        arrCodes.push(newStr);
        i++;
    }
    
    i = 0;
    let res = '';
    while (i < arrCodes.length) {
        if (arrCodes[i] === ' ') {
            res += ' ';
        }
        else {
            res += MORSE_TABLE[arrCodes[i]];
        }
        i++;
    }

    return res;
}

module.exports = {
    decode
}