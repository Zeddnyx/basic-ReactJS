import Page1 from './page/Page1'
import Page2 from './page/Page2'
import { useState, useEffect } from 'react'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    //check if default system is darkmode then automaticly dark
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark')
    }else {
      setTheme('light')
    }
  }, [])

  // update state theme if clicked by user
  useEffect(() => {
    if(theme === 'dark'){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return <div className='h-full w-screen bg-blue-500 dark:bg-gray-600'>
    <nav>
      <button onClick={handleTheme}>Change Theme {theme}</button>
    </nav>
    <Page1 />
    <Page2 />
  </div>
}

export default App
