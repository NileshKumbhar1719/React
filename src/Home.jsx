import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <p>Explore our farming resources and learn more about agriculture.</p>

      <div className="links">
        <Link to="/login" className="btn">Go to Farmer Page</Link>
      </div>
    </div>
  )
}
