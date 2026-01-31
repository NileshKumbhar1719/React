import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2026 MyApp. All rights reserved.</p>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}
