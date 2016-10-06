// We want to code our own version of map.

function myMap(list, callback) {
  var listCopy = []
  list.forEach(function(item) {
    // 1. apply callback to get transformation
    var transformedItem = callback(item);
    // 2. push the transformed value into the copied list
    listCopy.push(transformedItem);
  });
  return listCopy;
  // return a copy of the list where all elements
  // have been modified with callback.
}

var names = ["bob", "anna", "don", "david"]

var upcaseNames = myMap(names, function(item) {
  return item + "!";
});
console.log("upcaseNames ", upcaseNames);
