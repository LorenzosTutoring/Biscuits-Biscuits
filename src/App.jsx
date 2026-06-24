import { Link, Navigate, Route, Routes } from 'react-router-dom'
import About from './pages/About.tsx'
import Homepage from './pages/Homepage.tsx'
import Menu from './pages/Menu.tsx'
import Merch from './pages/Merch.tsx'
import Orders from './pages/Orders.tsx'
import Subscribe from './pages/Subscribe.tsx'
import './App.css'

function App() {
  return (
    <>
      <header style={{ padding: '1rem 1.25rem' }}>
        <nav style={{ display: 'flex', gap: '0.9rem', flexWrap: 'wrap' }}>
          <Link to="/">Homepage</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/subscribe">Subscribe</Link>
          <Link to="/merch">Merch</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
        </nav>
      </header>

      <main style={{ padding: '1.25rem' }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  )
}

export default App
