import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
const Aeirlines = lazy(() => import('./Pages/Aeirlines'))
const Passenger = lazy(() => import('./Pages/Passenger'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Aeirlines />} />
        <Route path="/passenger" element={<Passenger />} />
      </Routes>
    </Suspense>
  )
}

export default App
