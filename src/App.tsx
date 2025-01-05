import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './views/Login'
import Admin from './views/Admin'
import GamePage from './views/GamePage'
import Results from './views/Results'

function App() {

  const test = "not responding...";

  const one = "test";

  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/game-page' element={<GamePage />} />
        <Route path='/results' element={<Results />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </div>
  )
}

export default App
