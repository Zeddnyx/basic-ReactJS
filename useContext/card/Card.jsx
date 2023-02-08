import { useContext } from 'react'
import AppContext from '../Context'

export default function Card() {
  
  const context = useContext(AppContext)

  return <div>
    <h1>name: {context.user.user}</h1>
  </div>
}
