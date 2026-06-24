import { AppBar, Box, Button, Toolbar } from '@mui/material'
import { Link as RouterLink, Navigate, Route, Routes } from 'react-router-dom'
import logo from './assets/Logo.optimized.png'
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
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ minHeight: 80, gap: 1 }}>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: 0.5 }}>
            <Button component={RouterLink} to="/" color="inherit">
              Homepage
            </Button>
            <Button component={RouterLink} to="/orders" color="inherit">
              Orders
            </Button>
            <Button component={RouterLink} to="/subscribe" color="inherit">
              Subscribe
            </Button>
          </Box>

          <Box
            component="img"
            src={logo}
            alt="Biscuits-Biscuits logo"
            sx={{ width: 70, height: 70, objectFit: 'contain', mx: 1 }}
          />

          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start', gap: 0.5 }}>
            <Button component={RouterLink} to="/merch" color="inherit">
              Merch
            </Button>
            <Button component={RouterLink} to="/about" color="inherit">
              About
            </Button>
            <Button component={RouterLink} to="/menu" color="inherit">
              Menu
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ p: 2.5 }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Box>
    </>
  )
}

export default App
