const student = {
  firstName: 'Edward ',
  lastName: 'Kim',
  age: 33
};
const fullName = student.firstName + student.lastName;
console.log('value of the fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'researcher';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

const vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: '2014'
};
vehicle['color'] = 'silver';
vehicle['isConvertible'] = false;
console.log(vehicle['color']);
console.log(vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

const pet = {
  name: 'Latte',
  type: 'dog'
};
delete pet.name;
delete pet.type;
console.log(pet);
