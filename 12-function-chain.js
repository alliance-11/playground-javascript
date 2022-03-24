
const startParty = (person) => {
  person.party = true
  return person
}
const goSleeping = (person) => {
  person.state = "sleeping"
  person.party = false
  return person
}

const personInput = {
  name: "Mum",
  state: "awake",
  party: false
}

// start party
console.log( personInput )
let personOutput = startParty( personInput )
console.log( personOutput )

// gehen wir schlafen
personOutput = goSleeping( personOutput )
console.log( personOutput )

