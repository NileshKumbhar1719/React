import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import logo from './assets/react.svg';
export default function Header() {
  return (
     <header className="navbar">
      <div className="Logo">
        <NavLink to="/"><img src= {logo} alt="Logo" className="logo-img" /></NavLink>
        
      </div>

      <nav className="nav">
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/register">Register</NavLink></li>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
