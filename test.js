// Which is hoisted first?
//   functional declarations
//   variables
foo()
var name = "hello"
function foo() {
  console.log("foo says: ", name);
}

