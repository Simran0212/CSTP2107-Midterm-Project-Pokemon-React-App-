
import './App.css'

function App() {
 
  return (
    <Routes>
     <Route path='/' element={<HomePage/>}/>
     <Route path='/' element={<PokemonDetailPage/>}/>
    </Routes>
  )
}

export default App
