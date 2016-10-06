// find is a higher order function that is designed to
// look through every item in an array and find the item
// that matches a condition in the callback.

var list = ["Apples", "Feta Cheese", "Avocado", "Milk", "Tomatoes", "Hummus"];

// Task: Find the first item in the list that starts with A


var itemWithA = list.find(function(item) {
  // if you return true out of the callback, the item is found!
  return item.startsWith("A");
});
console.log(itemWithA);


// // with forEach
// var itemWithA;
// list.forEach(function(item) {
//   if(typeof itemWithA === "undefined" && item.startsWith("A")) {
//     itemWithA = item;
//   }
// })
// console.log(itemWithA);

