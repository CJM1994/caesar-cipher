const abet = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26
}

const shift = function (number, key) {
  number += key;
  if (number < 1) {
    number += 26;
  }
  if (number > 26) {
    number -= 26;
  }
  for (const letter in abet) {
    if (number === abet[letter]) {
      return letter;
    }
  }
}

const encrypt = function (plaintext, key) {
  etext = '';
  for (const letter of plaintext) {
    if (letter === ' ') etext += ' ';
    else etext += shift(abet[letter], key);
  }
  return etext;
}

module.exports = { encrypt };