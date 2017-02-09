// map is a higher order function that:
//   - takes in an array,
//   - applies a transformation (a callback)
//   - returns another array with the transformation applied to all elements

var names = ["bob", "anna", "don", "david"]
// We want: [{name: "bob"}, {name: "anna"}, ...]

// ES5
var new_array = names.map(function(item) { // anonymous
  return { name: item } // the return value from map is placed in a new array
})

var new_array = names.map(createObject);

function createObject(item) {
  return { name: item } // the return value from map is placed in a new array
}

// // ES6
// var new_array = names.map((item) => {
//   return { name: item }
// })

console.log(new_array);

