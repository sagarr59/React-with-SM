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

let IndexFinder = personsArray.findIndex((persons, index) => {
  return persons.country === "Nepal";
});
console.log(IndexFinder);
