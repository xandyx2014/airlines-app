import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
const Aeirlines = lazy(() => import('./Pages/Aeirlines'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Aeirlines />} />
      </Routes>
    </Suspense>
  )
}

export default App
