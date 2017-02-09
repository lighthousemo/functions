console.log(foo()); // <-- regular

function foo(){ // <--- hoisted
    var bar = function() { // <--- var bar gets hoisted
        return 3; // <--- regular
    };
    return bar(); // <-- regular
    var bar = function() { // <--- var bar gets hoisted
        return 8; // <--- regular line
    };
}

// After hoisting
function foo() {
  var bar;
  var bar;
  bar = function() {
    return 3;
  }
  return bar(); // <-- javascript stops executing the function here
  bar = function() {
    return 8;
  }
}

console.log(foo());
