const arrPizzas = [
  { id: 1, name: "Margeritha", price: 3.99 },
  { id: 2, name: "Funghi", price: 4.99 },
  { id: 3, name: "Oliven", price: 5.99 }, // 7.99
]

// map over array
// search an item by ID => 3
// make copy of found object and update copy

const updatePizza = (id, newPizzaData) => {
  // map => SEARCH for item & UPDATE
  const pizzasUpdated = arrPizzas.map( pizza => {

    if( pizza.id === id ) {
      const pizzaCopy = { ...pizza, ...newPizzaData } // newPizzaData: { price: 7.99 } 
      return pizzaCopy
    }
    return pizza
  })

  return pizzasUpdated
}

console.log( arrPizzas )

// update price of oliven pizza
const arrPizzasUpdated = updatePizza(3, { price: 7.99 } )
console.log( arrPizzasUpdated )



// MERGING objects (mini training)

const obj1 = { id: 5, name: "Hallo" }
const obj2 = { name: "Hallo neu", age: 37 }

// merge two objects together by copying from BOTH with spread operator
const objMerge = { ...obj1, ...obj2 }
console.log()
console.log( objMerge )