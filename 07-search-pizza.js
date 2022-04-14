const pizzas = [
  { _id: "p1", title: "Margherita" },
  { _id: "p2", title: "Funghi" },
  { _id: "p3", title: "Vegetaria" },
  { _id: "p4", title: "Tonno" },
]

// DYNAMIC search
const searchPizza = (searchPart) => {
  
  const pizzasFound = pizzas.filter( pizza => {
    return pizza.title.includes( searchPart )
    // return pizza.title === searchTitle
  })
  return pizzasFound // []
}

const pizzaFound = searchPizza("g")
console.log( pizzaFound )