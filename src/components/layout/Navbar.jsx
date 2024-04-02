import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="header">
            <div className="logo">
                <span>F</span>
                <h3>Fernando Gómez Recio</h3>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/inicio">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/servicios">Servicios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculum">Curriculum</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto">Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
