// Goal: Implement the forEach function using
// for loops.
//
/*
 * Called on an Array.
 * Calls the callback on every single element in the array.
 */
function myForEach(array, callback) {
  for(var i=0; i < array.length; i++) {
    var item = array[i];
    callback(item);
  }
}

myForEach(["Apples", "Tomatoes"], printOut);

function printOut(item) {
  console.log(item + "!");
}




