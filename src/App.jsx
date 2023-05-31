import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import './App.css'

function App() {

  return (
  
   <div className='App'>
    <BrowserRouter>
    <Navbar></Navbar>
      <div className='pages'>
        <Routes>
          <Route path='/'
          element={<Home/>}/>
            <Route path='/login'
          element={<Login/>}/>
            <Route path='/signup'
          element={<Signup/>}/>
        </Routes>
      </div>
    </BrowserRouter>
   </div>
    
  )
}

export default App
