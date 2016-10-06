// map is a higher order function that:
//   - takes in an array,
//   - applies a transformation (a callback)
//   - returns another array with the transformation applied to all elements

var names = ["bob", "anna", "don", "david"]
// We want: ["Bob", "Anna", "Don", "David"]

var upcaseNames = names.map(function(item) {
  return item + "!";
})

// // Same as above with forEach
// var upcaseNames = [];
// names.forEach(function(item) {
//   upcaseNames.push(item + "!");
// });

console.log("upcaseNames ", upcaseNames);
console.log("names ", names);
