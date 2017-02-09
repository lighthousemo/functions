function doA() {
  console.log("A");
}

doA()

var doB = function() {
  console.log("B");
}

doB()

var userFunctions = {
  defaultUser: { name: "Anonymous" },
  createUser: function(rawData) {
    if(rawData) {
      console.log("Creating user with ", rawData);
    } else {
      console.log("Creating user default ", this.defaultUser); // userFunctions
    }
  },
  updateUser: function(rawData) {
    console.log("Updating user with ", rawData);
  },
}

var otherFunctions = {
  calculateBenefits: function(user) {
    console.log("Calculate benefits")
  }
}

userFunctions.createUser({name: "Bob"})
userFunctions.createUser()






