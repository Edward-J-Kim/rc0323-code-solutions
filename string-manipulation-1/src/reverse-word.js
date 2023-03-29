/* exported reverseWord */
function reverseWord(val) {
  var op = '';
  var iCount = -1;
  for (let i = 0; i <= val.length; i++) {
    if (val[i] !== ' ' && i !== val.length) { continue; }
    for (let j = i - 1; j > iCount; j--) { op += val[j]; }
    if (i !== val.length) { op += ' '; }
    iCount = i;
  }
  return op;
}
