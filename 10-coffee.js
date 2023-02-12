// ARRAY CRUD

// Create => push
// READ => forEach, filter, map
// Update => map, slice
// Delete => splice, filter 

const coffee = {
  name: "Frappucchino",
  flavors: [], // keine flavors am Anfang
  zucker: false // KEIN Zucker drin
}

const addSugarToCoffee = (coffee) => {
  coffee.zucker = true
  return coffee
}

const addFlavor = (coffee, flavorNew) => {
  coffee.flavors.push( flavorNew )
  return coffee
}

let coffeeUpdated

console.log( coffee)
coffeeUpdated = addSugarToCoffee( coffee )
console.log( coffeeUpdated )

coffeeUpdated = addFlavor( coffee, "caramel" )
console.log( coffeeUpdated )
coffeeUpdated = addFlavor( coffee, "macadamia" )
console.log( coffeeUpdated )
