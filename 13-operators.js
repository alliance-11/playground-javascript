


// LOGICAL OPERATORS

console.log( 5 + 5 )

// COMPARISONS / VERGLEICH OPERATORS
  // always return true / false
console.log( 5 === 5 )
console.log( 5 === "5" )
console.log( 5 >= 3 )

// NOT TRUTHY => false, undefined, null, 0

// LOGICAL operators
  // always return one of the values!

  // logical OR returns the first value that is THRUTHY !  
console.log( 0 || 3 || 10 || 5 ) // => 3 => NOT returns true / false 

  // logical AND checks of BOTH values are truthy and in this case 
  // returns the LAST value that is TRUTHY! => 5 in this case
console.log( 10 && 5 ) // => 5 => NOT returns true / false 


// LOGICAL OPERATORS IN ACTION

const person = {
  age: 17,
  codingExperience: 75 
}

// Bewerbung => Firma akzeptiert entweder oder Bedingung
const bewerbeMich = (person) => {
  return person.age >= 35 || person.codingExperience >= 80
}
const jobJaNein = bewerbeMich(person)
console.log(jobJaNein)


// Bewerbung => Firma akzeptiert nur, wenn ZWEI Bedingungen stimmen
const bewerbeMichSchwierig = (person) => {
  return person.age >= 35 && person.codingExperience >= 80
}

console.log( bewerbeMichSchwierig( person ) ) // keine chance

const person2 = {
  age: 47,
  codingExperience: 87
}
console.log( bewerbeMichSchwierig( person2 ) ) // bekommt job!
