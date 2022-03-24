
const coffee = {
  name: "Frappucchino",
  zucker: false // KEIN Zucker drin
}

const addSugarToCoffee = (coffee) => {
  coffee.zucker = true
  return coffee
}

console.log( coffee)
const coffeeNewMitZucker = addSugarToCoffee( coffee )
console.log( coffeeNewMitZucker )