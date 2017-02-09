const foo = function() {
  console.log("A");
}
// const foo = function() {
//   console.log("B");
// }
//
function foo() {
  console.log("B");
}

foo();





const foo;

function foo() {
  console.log("B");
}

foo = function() {
  console.log("A");
}
// const foo = function() {
//   console.log("B");
// }
//
foo();
