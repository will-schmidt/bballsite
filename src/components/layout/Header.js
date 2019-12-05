import React from 'react'

export default function Header() {
  return (
    <header>
      <div style={headerStyleContainer} className="container">
        <a href="#" style={logoStyle}>
          BBall Data
        </a>
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
  padding: '1rem 0'
}
