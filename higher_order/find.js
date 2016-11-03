// find is a higher order function that is designed to
// look through every item in an array and find the item
// that matches a condition in the callback.

var users = [
  {id: 1, name: "Bob"},
  {id: 2, name: "Sailor Moon"},
  {id: 3, name: "Daffy Duck"},
  {id: 4, name: "Billy"},
]

// Find the first user who's name starts with B

var userWithB = users.find(function(userObj) {  // <--- callback function (anonymous)
  return userObj.name.startsWith("B")
});

console.log(userWithB["name"]);

// Get all users whose name starts with B
var usersWithB = users.filter(function(userObj) {  // <--- callback function (anonymous)
  return userObj.name.startsWith("B")
});
console.log(usersWithB);

