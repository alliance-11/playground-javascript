// destructure (=extract) data form PROPS object
const NumberComponent = ({ number, str }) => {
  // console.log("Props: ", props)
  // const { str, number } = props // destructuring props => extract data from props
  console.log(number)

  return (
    <div style={{ border: "1px solid #ccc", margin: "10" }}>
      <h2>Number / String Component</h2>
      <div>Number: {number}</div>
      <div>String: {str}</div>
    </div>
  )
}

export default NumberComponent
