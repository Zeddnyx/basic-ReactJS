import React, {useState} from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState([])
  const [activity, setActivity] = useState('')
  
  const pasSubmit = (e) => {
    e.preventDefault(); // supaya pas btn di klik tidak reload

    // gunakan spread op supaya
    // data array yg lama tidak hilang tertimpa data array yg baru
    // dan jadikan array state activity nya karena tadinya string
    setInput([...input, activity])
  }

  return (
    <>
      <h1>Todo list</h1>
      <form onSubmit={pasSubmit}>
        <input 
          onChange={(e) => setActivity(e.target.value)} 
        />
        <button type='submit' >Add list</button>
      </form>
      <ul>
        {input.map((list, index) => {
          return <li key={index} >{list}</li>
        })}
      </ul>
    </>
  )
}
export default App;
