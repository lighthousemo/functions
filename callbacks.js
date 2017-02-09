// function doA() {
//   console.log("A");
// }

// function doB() {
//   console.log("B");
// }
//
// function doC() {
//   console.log("C");
// }
//
// // Goal: I want to doA then doB then doC
// doA()
// doB()
// doC()

// Goal: Rewrite doA so that I can do anything else after doA is done.

function doA(callback) {
  console.log("A");
  console.log(callback)
  callback()
}

function doB() {
  console.log("B");
}

function doC() {
  console.log("C");
}

// doA(doB)
doA(doC)





