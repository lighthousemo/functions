// functions are values

// we can assign them to variables
var itsRainingInVancouver = function itsRainingInVancouver() {
  return true;
}

// we can define them on their own
function itsRainingInVancouver() {
  return true;
}

// we can assign them to properties in an object
var trueThings = {
  itsRainingInVancouver: function itsRainingInVancouver() {
    return true;
  },
  rainAmount: 10
}

// Functions can be passed in to other functions, for later use
// This function calls the given function (fn) and console.log the output
function saySomethingTrue(fn) {
  console.log(fn);
  console.log("it is true that: ", fn());
}

// Example: Passing an anonymous function
// Notice that this function causes a crash on purpose.
// If you look at the stack trace, you will see that the stack trace
// does not include the name of the function. It only displays the line
// number.
saySomethingTrue(function () { 
  crash
});

// Example: Passing a named function.
// Notice that this function causes a crash on purpose.
// If you look at the stack trace, you will see that the stack trace
// includes the name of the function 'itsRaining'
saySomethingTrue(function itsRaining() { 
  crash
});








