import PizzaItem from "./PizzaItem";

// bekommt ARRAY von Pizzas als Prop
const PizzaList = ( { pizzas } ) => {

  console.log( "Pizzas: ", pizzas )

  return (
    <div>
      <h2>Pizza List</h2>
      {/* map data array to array of HTML */}
      {
        pizzas.map( pizza => (
          // layout SINGLE pizza
          // KEY we just need in LISTS => so in map 
          <PizzaItem key={ pizza.id } pizza={pizza}></PizzaItem>
        ))
      }
    </div>
  )
}
 
export default PizzaList;