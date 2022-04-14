
// bekommt als Prop ein Pizza OBJECT
const PizzaItem = ( { pizza } ) => {
  return (
    <div style={{ marginLeft: "10" }}>
      <span>{pizza.title}</span> <span>{pizza.price}</span>
    </div>
  )
}
 
export default PizzaItem;