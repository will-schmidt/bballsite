import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <header>
      <div style={headerStyleContainer} className="container">
        <Link to='/' style={logoStyle}>
        <FontAwesomeIcon icon={faBasketballBall} />BBall Data
        </Link>
        <ul className="header-nav">
          <li><NavLink to='/' activeClassName="active">Home</NavLink></li>
          <li><NavLink to='/about' activeClassName="active">About</NavLink></li>
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
  padding: '1rem 1rem',
  display: 'flex',
  alignItems: 'flex-end'
}