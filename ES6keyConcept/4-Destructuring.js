//shorthand property name
const id = 1;
const productName = "Product Apple Watch";
const rating = 5;

// const product = {
//   id: id,
//   productName: productName,
//   rating: rating,
// };
const product = {
  id,
  productName,
  rating,
};
console.log(product);

const product2 = {
  description: "Product 2 description",
  id,
  productName,
  rating,
};

// const getProductTwoDescription = product2.description;
// console.log(getProductTwoDescription);

//destructing all the properties

const { description } = product2;
console.log(description);

//Array destructuring
const array = [1, 2, 3];
let getArrayFirstValue = array[0];
let getArraySecondValue = array[1];
console.log(getArrayFirstValue, getArraySecondValue);

//destructing
const [getArrayFirstElement, getArraySecondElement, getArrayThirdElement] =
  array;
console.log(getArrayFirstElement, getArraySecondElement, getArrayThirdElement);
