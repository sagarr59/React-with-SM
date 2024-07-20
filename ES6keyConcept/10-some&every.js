//array of object
const personsArray = [
  {
    name: "Sagar",
    age: 22,
    country: "Nepal",
  },
  {
    name: "Ram",
    age: 15,
    country: "India",
  },
  {
    name: "Shyam",
    age: 45,
    country: "Bhutan",
  },
  {
    name: "Rohit",
    age: 30,
    country: "Srilanka",
  },
];

//some-> returns boolean flag based on if any condition will satisfied

//every-> returns true when all the conditions satisfied

let checkSomeArrayMethod = personsArray.some((singlePerson, index) => {
  return singlePerson.age > 40;
});

console.log(checkSomeArrayMethod);

//every
let checkEveryArrayMethod = personsArray.every((singlePerson, index) => {
  return singlePerson.age > 40;
});
console.log(checkEveryArrayMethod);

//every will check all objects and if all objects satisfied .then only returns true

let checkEvery = personsArray.every((singlePerson, index) => {
  return singlePerson.age > 2;
});

console.log(checkEvery);
