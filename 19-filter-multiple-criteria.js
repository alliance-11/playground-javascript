

const users = [
  { name: "Gael", hobby: "playing games"},
  { name: "Edward", hobby: "Not explaining, just coding" },
  { name: "Eliza", hobby: "Javascript" },
]

// filtern wir user

const filterUsers = (users, searchTerm) => {

  return users.filter( user => {

  })

}


const username = "Gael"
const hobby = "playing games"

const searchTerm = "games"

if( username.includes(searchTerm) || hobby.includes(searchTerm) ) {
  console.log("Found games!")
}
else {
  console.log("NOT found games")
}

// TWO criteria
// if( "Gael".includes("games") || "playing games".includes("games") ) {
//   console.log( "TRUE" )
// }
// else {
//   console.log("Failed")
// }