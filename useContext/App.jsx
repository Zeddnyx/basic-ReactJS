import React, { useEffect, useState, createContext } from 'react'
import Card from './card/Card'
import Car2 from './card/Card2'
import AppContext from './Context.jsx'

function App() {
  const [user, setUser] = useState({})

  useEffect(()=>{
    const api = {
      user: 'udin',
      age: 7,
    }

    setUser(api)
  })

  const value = {user}
 
  return <AppContext.Provider value={value}>
    <div >
      <Card />
      <Car2 />
    </div>
  </AppContext.Provider>
}

export default App
