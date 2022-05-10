import { Route, Routes } from 'react-router-dom'
import './App.css'
import Aeirlines from './Pages/Aeirlines'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Aeirlines />} />
    </Routes>
  )
}

export default App
