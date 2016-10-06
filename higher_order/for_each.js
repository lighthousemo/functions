// forEach was designed to iterate over every single element

var list = ["Apples", "Feta Cheese", "Milk", "Tomatoes", "Hummus"];

var printListLetter = function(item, index, array){
  console.log("array is ", array);
  console.log(item[0], index);
}

// we want to console.log the first letter of every item on the list.
list.forEach(printListLetter)
