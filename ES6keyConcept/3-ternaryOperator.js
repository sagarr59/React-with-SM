let showRecipeOne = false;
function getRecipeOneName(recipeName) {
  return recipeName;
}

function getRecipeTwoName(recipeName) {
  return recipeName;
}

if (showRecipeOne) {
  console.log(getRecipeOneName("Pizza"));
} else {
  console.log(getRecipeTwoName("Momo"));
}

//ternary
// condition ? statement 1 : statement 2;
showRecipeOne? console.log(getRecipeOneName("Pizza")) : console.log(getRecipeTwoName("Momo"))