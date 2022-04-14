
// DISPLAY COMPONENT
const ArrayComponent = ( { arr } ) => {
  
  return (
    <div style={{ border: "1px solid #ccc", margin: "10" }}>
      <h2>Array component</h2>
      Array:{" "}
      {arr.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  )
}
 
export default ArrayComponent;