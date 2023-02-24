import { useReducer } from 'react'

const INITAIL_STATE = {
  loading: false,
  error: false,
  post: {},
}

const postReducer = (state, action) => {
  switch (action.type) {
    case 'START_FETCHING':
      return {
        loading: true,
        error: false,
        post: {},
      }
    case 'FETCH_SUCCESS':
      return {
        // im using ... so i didin't need to overwrite state if no need change like error state in the previous
        ...state,
        loading: false,
        post: action.payload,
      }
    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: true,
        post: {},
      }
    default:
      return state
  }
}

export default function Fetch(){
  const [state, dispatch] = useReducer(postReducer, INITAIL_STATE)

  const allProducts = async () => {
    try {
      dispatch({ type: 'START_FETCHING'})
      const resp = await fetch('https://dummyjson.com/products')
      const data = await resp.json()
      const json = data.products
      dispatch({ type: 'FETCH_SUCCESS', payload: json})
    } catch (error) {
      return dispatch({ type: 'ERROR'})
    }
  }

  return <div>
    <button type="submit" onClick={() => allProducts()}>
      {state.loading ? <p>loading ...</p> : <span>Fetch !</span>}
    </button>
    <div>
    </div>

    <span>{state.post &&  <p>succes fetch!</p>}</span>
    <span>{state.error && 'error fetch!'}</span>
  </div>
}
