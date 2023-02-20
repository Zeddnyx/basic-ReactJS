import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Detail from './Pages/Detail'

function App() {

  return (
    <div className='max-w-2xl mx-auto'>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
