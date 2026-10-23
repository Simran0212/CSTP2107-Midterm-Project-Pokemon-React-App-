import Homepage from './pages/Homepage'
import PokemonDetailsPage from './pages/PokemonDetailspage'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
 
  return (
    <Routes>
     <Route path='/' element={<Homepage/>}/>
     <Route path='/dashboard' element={<PokemonDetailsPage/>}/>
    </Routes>
  )
}

export default App
