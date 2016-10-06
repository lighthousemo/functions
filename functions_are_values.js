// function can be assigned to a variable.

var sayHello = function(name) {
  return "Hello " + name;
}

console.log(sayHello("Bob"));

function excited(punctuation, greeterFunction) {
  console.log(greeterFunction("Anna") + punctuation);
}
excited("!!!", sayHello);

var sayKonichiwa = function(name) {
  return "Konichiwa " + name;
}

excited("!", sayKonichiwa);
