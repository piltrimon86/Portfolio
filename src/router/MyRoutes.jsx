import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
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
            <section className="content">
                <Routes>
                    <Route path="/" element={<Navigate to="/inicio" />} />
                    <Route path="/inicio" element={<AboutMe />} />
                    <Route path="/proyectos" element={<Projects />} />
                    <Route path="/servicios" element={<Services />} />
                    <Route path="/curriculum" element={<Curriculum />} />
                    <Route path="/contacto" element={<Contact />} />
                </Routes>
            </section>
            {/* FOOTER */}
            <Footer />
        </BrowserRouter>
    )
}

export default MyRoutes
