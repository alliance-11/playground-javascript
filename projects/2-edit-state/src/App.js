import { useState } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([
    { id: 1, name: "Gael", experience: 15 },
    { id: 2, name: "Rob", experience: 17 }
  ])

  const onExperienceUpdateClick = (id) => {
    console.log( id )

    // update von item in array => map
    // map kann man nutzen, ALLE items zu ändern oder nur eins

    const usersUpdated = users.map( user => {
      return user.id !== id ? user : { ...user, experience: user.experience + 1  }
    })

    console.log( usersUpdated )

    // overwrite users in state with UPDATED users 
    setUsers( usersUpdated )

  }

  return (
    <div className="App">
      <header className="App-header">
        {
          users.map(user => (
            <div key={ user.id } >
              <div>
                {user.name} {user.experience} 
                {/* Bei Update => übergebe immer bei BUTTON click die ID des Items, dass wir updaten wollen */}
                <button onClick={ () => onExperienceUpdateClick( user.id ) }>+</button>
              </div>
            </div>
          ))

        }
      </header>
    </div>
  );
}

export default App;
