
const arrPeopleOriginal = [
  { id: 1, name: "Eliza" },
  { id: 2, name: "Gael" }, // UPDATE
  { id: 3, name: "Edward" }
]

// RESULT
// const gael = { id: 2, name: "Gael Freire" } // name => "Gael Freire"

console.log( arrPeopleOriginal )

// 1. Map LOOPT durch jedes Item im Array
const arrUpdated = arrPeopleOriginal.map( (person) => {

  // 1.run => perosn.id = 1
  // 2.run => person.id = 2
  // 3.run => person.id = 3
  
  // search item by an ID
  if(person.id == 2) {
    console.log( person )
    // person.name = "Gael Freire"
    // person.age = 27 // we dont change the original object!
    return {...person, age: 27} // we create a COPY and update that one!
  }
  return person
})

console.log( "Original", arrPeopleOriginal )
console.log( "Update (Copy)", arrUpdated )
