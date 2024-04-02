import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'
import Curriculum from '../components/Curriculum'
import Contact from '../components/Contact'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const MyRoutes = () => {
    return (
        <BrowserRouter>
            {/* HEADER Y NAVEGACION */}
            <Navbar />
            {/* CONTENIDO CENTRAL */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/inicio" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/servicios" element={<Services />} />
                <Route path="/curriculum" element={<Curriculum />} />
                <Route path="/contacto" element={<Contact />} />
            </Routes>
            <hr />
            {/* FOOTER */}
            <Footer />
        </BrowserRouter>
    )
}

export default MyRoutes
