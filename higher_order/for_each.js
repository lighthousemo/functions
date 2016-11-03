// forEach was designed to iterate over every single element
// Here are the docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

var list = ["Apples", "Feta Cheese", "Milk", "Tomatoes", "Hummus"];

// Goal: write a shopping list reminder program

console.log("Don't forget to buy: ");

// for(item of list) {
//   prettyPrint(item);
// }

list.forEach(prettyPrint)

function prettyPrint(foodStuff, listIndex) {  // <-- passed as a callback to forEach
  var lowerCaseItem = foodStuff.toLowerCase();
  console.log(listIndex + 1, lowerCaseItem);
}

