import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { Link as RouterLink, Navigate, Route, Routes } from 'react-router-dom'
import logo from './assets/Logo.optimized.png'
import About from './pages/About.tsx'
import Homepage from './pages/Homepage.tsx'
import Menu from './pages/Menu.tsx'
import Merch from './pages/Merch.tsx'
import Orders from './pages/Orders.tsx'
import Subscribe from './pages/Subscribe.tsx'
import './App.css'

const navLinks = [
  { label: 'Homepage', to: '/' },
  { label: 'Orders', to: '/orders' },
  { label: 'Subscribe', to: '/subscribe' },
  { label: 'Merch', to: '/merch' },
  { label: 'About', to: '/about' },
  { label: 'Menu', to: '/menu' },
]

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const closeMobileNav = () => setMobileNavOpen(false)

  return (
    <>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ minHeight: 80, display: { xs: 'flex', md: 'none' }, px: 1.5 }}>
          <IconButton
            aria-label="Open navigation menu"
            color="inherit"
            onClick={() => setMobileNavOpen(true)}
            sx={{ width: 44, height: 44 }}
          >
            <MenuIcon />
          </IconButton>

          <IconButton
            component={RouterLink}
            to="/"
            aria-label="Go to homepage"
            sx={{ p: 0.5, position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}
          >
            <Box
              component="img"
              src={logo}
              alt="Biscuits-Biscuits logo"
              sx={{ width: 62, height: 62, objectFit: 'contain' }}
            />
          </IconButton>

          <Box sx={{ width: 44, height: 44, ml: 'auto' }} />
        </Toolbar>

        <Toolbar sx={{ minHeight: 80, gap: 1, display: { xs: 'none', md: 'flex' } }}>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: 0.5 }}>
            {navLinks.slice(0, 3).map((link) => (
              <Button key={link.to} component={RouterLink} to={link.to} color="inherit">
                {link.label}
              </Button>
            ))}
          </Box>

          <IconButton
            component={RouterLink}
            to="/"
            aria-label="Go to homepage"
            sx={{ p: 0.5, mx: 1 }}
          >
            <Box
              component="img"
              src={logo}
              alt="Biscuits-Biscuits logo"
              sx={{ width: 70, height: 70, objectFit: 'contain' }}
            />
          </IconButton>

          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start', gap: 0.5 }}>
            {navLinks.slice(3).map((link) => (
              <Button key={link.to} component={RouterLink} to={link.to} color="inherit">
                {link.label}
              </Button>
            ))}
          </Box>
        </Toolbar>

        <Drawer anchor="left" open={mobileNavOpen} onClose={closeMobileNav}>
          <Box sx={{ width: 260, pt: 1 }} role="presentation" onClick={closeMobileNav}>
            <List>
              {navLinks.map((link) => (
                <ListItemButton key={link.to} component={RouterLink} to={link.to}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Drawer>
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
