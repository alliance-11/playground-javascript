
// return
// kein return


// schnitt => kurz, lang, mittellang
const cutHair = (person, schnittneu) => {
  person.schnitt = schnittneu
  // return person
}

// INPUT
const objPerson = {
  name: "Rob",
  schnitt: "mittellang"
}
console.log( objPerson ) // { name: "Rob", schnitt: "mittellang" }
cutHair( objPerson, "kurz" )
console.log( objPerson )

// const personUpdated = cutHair(objPerson, "kurz")
// console.log(personUpdated)

// OUTPUT 
// const objPerson = {
//   name: "Rob",
//   haare: "kurz" // this should get updated!
// }

