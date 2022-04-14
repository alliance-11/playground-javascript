import './App.css';
import { useState } from 'react';
import NumberComponent from './components/NumberComponent';
import ObjectComponent from './components/ObjectComponent';
import ArrayComponent from './components/ArrayComponent';
import PizzaList from './components/PizzaList';


// GENERAL STRUCTURE OF ANY COMPONENT
// function MyComponent() {
  // STATES

  // SETTER FUNCTIONS

  // JSX
// }


function App() {

  // STATES (=Daten, die der USER ändern kann)
  const [ num, setNum] = useState( 5 ) // setNum( 10 ) 
  const [ str, setStr] = useState("guten tag") // setStr("guten abend")
  const [obj , setObj] = useState({ name: "Eliza", profession: "JavaScript Engineer" }) // start value for object
  const [arr, setArr] = useState([])

  const [pizzas, setPizzas] = useState([
      { id: "1", title: "Funghi", price: 5.99 },
      { id: "2", title: "Vegetale", price: 4.99 },
    ]) // setPizzas( neuerArray ) => kopie des ALTEN array + update


  // EVENT LISTNER => SETTER FUNCTIONS
  const onClick = () => {
    setNum( num + 1 )
  }

  const addPizza = () => {
    const pizzaNew = { id: Date.now().toString(), title: "Salami", price: 6.99 }
    console.log( pizzaNew )
    setPizzas( [...pizzas, pizzaNew] )
  }
  /// Arrays => [ ...alterArray, neuesObject ]


  // JSX LAYOUT
  return (
    <div className="App">
      <header className="App-header">
        <PizzaList pizzas={pizzas}></PizzaList>
        {/* <ArrayComponent arr={ ['Edward', 'Gael'] }></ArrayComponent>
        <ObjectComponent obj={ obj }></ObjectComponent>
        <NumberComponent str={str} number={ num } ></NumberComponent>
        <button onClick={ onClick }>Increment number</button> */}
        <button onClick={ addPizza }>Add Pizza</button>
      </header>
    </div>
  )
}

export default App;
