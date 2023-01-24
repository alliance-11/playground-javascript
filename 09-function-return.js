// INPUT
const objPerson = {
  name: "Rob",
  schnitt: "mittellang"
}
console.log( objPerson ) // { name: "Rob", schnitt: "mittellang" }

// schnitt => kurz, lang, mittellang
const cutHair = (person, schnittneu) => {
  person.schnitt = schnittneu

  // convention: if a function updates something, we return the thing that was updated!
  return person 
}

// UPDATE person haircut
const objPersonUpdated = cutHair( objPerson, "kurz" )
console.log( objPersonUpdated )
