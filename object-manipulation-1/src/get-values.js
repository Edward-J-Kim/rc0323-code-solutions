/* exported getValues */
function getValues(object) {
  var values = [];
  for (var key in object) {
    // eslint-disable-next-line no-prototype-builtins
    if (key in object) {
      values.push(object[key]);
    }
  }
  return values;
}
