import { useReducer } from 'react'

export default function Form(){

  const initialState = {
    quantity: 0,
  }
  const reducer = (state, action) => {
    switch(action.type){
      case 'CHANGE_INPUT':
        return {
          ...state,[action.payload.name]:action.payload.value
        }
      case 'DECREASE':
        return {
          ...state, quantity: state.quantity - 1
        }
      case 'INCREASE':
        return {
          ...state, quantity: state.quantity + 1
        }
      default:
        state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChange = (e => {
    e.preventDefault()

    dispatch({
      type: 'CHANGE_INPUT', 
      payload: {name:e.target.name, value: e.target.value},
    })
    console.log(state)
  })

  return (
  <form onSubmit={handleChange} className='grid grid-cols-1 gap-5 mt-5 pr-60'>
    <input type="text" name="name" />
    <input type="number" name="age" />
    <input type="text" name="desc" />

    <button onClick={() => dispatch({ type: 'INCREASE'})}>+</button>
    <span>{state.quantity}</span>
    <button onClick={() => dispatch({ type: 'DECREASE'})}>-</button>
  </form>
  )
}
