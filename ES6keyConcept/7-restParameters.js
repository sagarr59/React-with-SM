function getInfo(a, b, c, d, e) {
  console.log(a, b, c, d, e);
  return "Sagar Raut";
}

console.log(getInfo(1, 2, 3, 4, 5));

//rest parameter always at last
/* function getInfo(...c,a) {
  console.log(a, c);
  return "Sagar Raut";
} */
function getInfo(a, ...c) {
  console.log(a, c); //...c ->all in array
  return "Sagar Raut";
}

console.log(getInfo(1, 2, 3, 4, 5, 6, 7, 8, 9));
