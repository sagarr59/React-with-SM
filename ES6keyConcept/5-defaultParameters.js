function multiply(num1 = 2, num2 = 3) {
  //default parameters
  return console.log(num1 * num2);
}
multiply(); //takes default parameters
multiply(4, 5); //overrides
multiply(3); //take 2nd default parameter
