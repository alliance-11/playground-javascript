const sum = (a,b) => {
  const summe = a + b
  return summe // wir returnen, wenn wir das ERGEBNIS weiter verarbeiten wollen
}

const subtract = (a,b) => {
  return a-b
}

let summe = sum(5, 3)
console.log(summe) // 8

const ergebnis = subtract(summe, 8)
console.log( ergebnis )

