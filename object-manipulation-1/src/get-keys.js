/* exported getKeys */
function getKeys(object) {
  var keys = [];
  for (var key in object) {
    // eslint-disable-next-line no-prototype-builtins
    if (key in object) {
      keys.push(key);
    }
  }
  return keys;
}
