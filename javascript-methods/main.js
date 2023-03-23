const a = 2;
const b = 4;
const c = 7;

const maximumValue = Math.max(a, b, c);
console.log(maximumValue);

const heroes = ['spiderman', 'batman', 'superman', 'ironman'];

let randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

const randomIndex = Math.floor(randomNumber);

console.log(randomIndex);

const randomHero = heroes[randomIndex];

console.log('value of randomHero:', randomHero);

const library = [
  {
    title: 'Harry Potter',
    author: 'J.K.Rowling'
  },
  {
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien'
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown'
  }
];
const lastBook = library.pop();
console.log('value of lastBook:', lastBook);
const firstBook = library.shift();
console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('value of library:', library);

const fullName = 'Edward Kim';
const firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
