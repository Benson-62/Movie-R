import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Addmovie from './components/Addmovie'
import Viewmovie from './components/Viewmovie'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path= '/t' element={<Addmovie/>}/>
      <Route path= '/r' element={<Viewmovie/>}/>
    </Routes>
    </>
  )
}

export default App
