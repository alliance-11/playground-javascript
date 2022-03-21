
// function displayMessage() {
//   console.log( message )
// }

// OUTER message
const message = "hallo rob" // DECLARATION 

// SHADOWING

const displayMessage = ( message ) => {
  // INNER message
  console.log( message )
}

// CALL the function
printArray()
displayMessage("hallo eliza") // I call function WITHOUT parameter
console.log( message )

// SCOPE (Gültigkeit der Variablen)

// console.log( message )


// HOISTING => pull up
// Arrow Function




