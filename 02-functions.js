
// FUNCTION DECLARATION

const printHobby = ( objPerson ) => {
  console.log( objPerson.favoriteHobby )
}

const printFirstName = ( objPerson ) => {
  console.log( objPerson.firstName )
}

// OBJECT
const person = { 
  firstName: "Eliza",
  lastName: "Aza",
  favoriteHobby: "JavaScript"
}

printHobby( person )
printFirstName( person )
const product = { 
  title: "Kuehlschrank Kuehli",
  price: 399.99
}
const person1 = {
  anrede: "Mrs",
  name: "Jenna"
}
const person2 = {
  anrede: "Mr",
  name: "Edward"
} // ==> hallo anrede name
const person3 = {
  anrede: "Mr",
  name: "Gael"
} // ==> hallo anrede name

// console.log => Hallo Mrs Jenna
// => Hallo Mr Edward
const greetPerson = ( person ) => {
  console.log( `Hallo ${ person.name }` )
}
greetPerson( person3 )
// greetPerson( person2 )




