import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import "./server"
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard'
import HostLayout from './components/HostLayout';
import HostVans from './pages/Host/HostVans';
import HostVanDetail from './pages/Host/HostVanDetail';
import HostVanInfo from './pages/Host/HostVanInfo';


function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          
          <Route path="host" element={<HostLayout/>}>
            <Route index element={<Dashboard />} />
            <Route path='vans' element={<HostVans/>} />
            
            <Route path='vans/:id' element={<HostVanDetail/>}>
              <Route index element={<HostVanInfo />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);