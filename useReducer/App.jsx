import Form from './Form'
import Fetch from './Fetch'

// when to use reducer? if u have lot of state in the same time change. u should using reducer
function App() {

  return (
    <div className='max-w-2xl mx-auto'>
    <Form />
    <Fetch />
    </div>
  )
}

export default App
