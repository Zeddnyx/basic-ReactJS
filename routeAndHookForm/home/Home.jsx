import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Page from '../page/page1'
import About from '../page/About'
import Form from '../form/Index'

export default function Home() {

  return <div>
    <Router>
    <Routes>
      <Route path='/' element={<Page />} />
      <Route path='/about' element={<About />} />
      <Route path='/form' element={<Form />} />
    </Routes>
    </Router>
    
  </div>
}
