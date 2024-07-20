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
  {
    name: "Shristi",
    age: 21,
    country: "Nepal",
  },
];
// find -> only returns 1st condition that is satisfied
//finding who is from Nepal
let getPersonFromNepal = personsArray.find((singlePerson, index) => {
  return singlePerson.country === "Nepal";
});
console.log(getPersonFromNepal);

//using filter ->checks and returns all satisfied conditions
console.log("Now with filter ");
let getAllPersonsFromNepal = personsArray.filter((fromNepal, index) => {
  return fromNepal.country === "Nepal";
});
console.log(getAllPersonsFromNepal);
