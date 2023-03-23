function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}
const convertedMinutesToSeconds = convertMinutesToSeconds(5);
console.log('value of convertedMinutesToSeconds:', convertedMinutesToSeconds);

function greet(name) {
  const greeting = 'Hey, ' + name;
  return greeting;
}
const greeted = greet('Beavis');
console.log('value of greeting:', greeted);

function getArea(width, height) {
  const area = width * height;
  return area;
}

const calculatedArea = getArea(17, 42);
console.log('value of calculated area:', calculatedArea);

function getFirstName(person) {
  const firstName = person.firstName;
  return firstName;
}
const getFirstNameResults = getFirstName({ firstName: 'Edward', lastName: 'Kim' });
console.log(getFirstNameResults);

function getLastElement(array) {
  const lastIndex = array.length - 1;
  const lastElement = array[lastIndex];
  return lastElement;
}
const getLastElementResults = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('value og getLastElementResults:', getLastElementResults);
