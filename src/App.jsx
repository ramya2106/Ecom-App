import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {HashRouter, Routes,Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Cart from './pages/Cart'
import Admin from './pages/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/admin" element={<Admin/>}/>
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
