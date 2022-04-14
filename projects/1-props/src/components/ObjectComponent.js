const ObjectComponent = ({ obj }) => {

  console.log( obj )

  return (
    <div style={{ border: "1px solid #ccc", margin: "10" }}>
      <h2>Object component</h2>
      <div>{obj.name}</div>
      <div>{obj.profession}</div>
    </div>
  )
}
 
export default ObjectComponent;