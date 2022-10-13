import React, {useState} from 'react'

export default function App(){
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  
  const submit = e => {
    e.preventDefault()

    // trimn() = space is counted
    if ( name.trim().length === 0 || age.trim().length === 0 ) {
      return;
    }
    if ( +age < 1 ) { return;}

    console.log(name, age)
  }

  return (
    <div>
      <form onClick={submit} className='grid grid-cols-1'>
        <input className='border-2' 
           type="text"
           value={name} 
           onChange={e => setName(e.target.value)} 
           placeholder='name'
        />

        <input className='border-2' 
           type="number"
           value={age} 
           onChange={e => setAge(e.target.value)} 
           placeholder='age'
        />

        <button className='bg-blue-300' type="submit">add user</button>
      </form>

    </div>
  )
} 
