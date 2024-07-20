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

//showing only name
let getAllNames = personsArray.map((singlePerson, index) => {
  console.log(singlePerson, index);
  return `${singlePerson.name}'s age is ${singlePerson.age}`;
});

console.log(getAllNames);
