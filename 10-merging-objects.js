

const user = {
  name: "Rob",
  specialization: "Backend",
  age: 38
}

// user.age = 39 // in react we can never change the ORIGINAL!
// console.log( user )

const userUpdated = { ...user, age: 39, anrede: "Mr" }
console.log(userUpdated) 

const userSubset = { name: user.name, specialization: user.specialization }
console.log( userSubset )