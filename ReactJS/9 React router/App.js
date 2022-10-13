import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
// eslint-disable-next-line
function App() {
    return (
        <>
            <BrowserRouter>
                <header className="py-5 px-auto mt-10">
                    <div className="container">
                        <ul className="flex justify-around flex-col p-5 mx-auto my-10">
                            <Link to="/" >Home</Link>
                            <Link to="/about" >About</Link>
                        </ul>
                    </div>
                </header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
