import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

export default function Header() {
  return (
    <header>
      <div style={headerStyleContainer} className="container">
        <Link to='/' style={logoStyle}>
          BBall Data
        </Link>
        <ul style={navbar} className="header-nav">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </div>
    </header>
  )
}

const logoStyle = {
  fontWeight: 'bold',
  fontFamily: "'Montserrat', 'sans-serif'",
  color: '#000',
  textDecoration: 'none',
  fontSize: '2rem',
  letterSpacing: '-0.2rem'
}

const headerStyleContainer = {
  borderBottom: '2px solid #000',
  padding: '1rem 0',
  display: 'flex',
  alignItems: 'flex-end'
}

const navbar = {
  marginleft: '1rem'
}