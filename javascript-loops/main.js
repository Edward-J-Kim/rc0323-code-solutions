/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
// eslint-disable-next-line no-unused-vars
function getNumbersToTens() {
  let currentNumber = 1;
  const number = [];
  let i = 0;
  while (i < 10) {
    currentNumber += 1;
    number.push(currentNumber);
    i++;
  }
  return number;
}

function getEvenNumbersToTwenty() {
  let currentNumber = 2;
  const evenNumber = [];
  let i = 1;
  while (i < 10) {
    currentNumber += 2;
    evenNumber.push(currentNumber);
    i++;
  }
  return evenNumber;
}
