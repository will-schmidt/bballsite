import React from 'react'
import ballImage from '../../assets/images/bball-unsplash.jpg'

export default function Hero() {
  return (
    <div className="container" style={HeaderStyle}>
      <div style={HeroRight}>
        <h1 style={HeadlineStyle}>
          Crunching the Numbers
          <br />
          <span>of Basketball</span>
        </h1>
        <p>
          Get the latest breakdown of data from the latest games played in the
          NBA.
        </p>
        <p>
          Follow players, teams and understand trends you might otherwise miss.
        </p>
      </div>
      <div style={HeroLeft}>
        <img src={ballImage} style={HeroImage} alt="" />
      </div>
    </div>
  )
}

const HeaderStyle = {
  padding: '2rem 0',
  display: 'flex',
  justifyContent: 'space-between'
}

const HeadlineStyle = {
  lineHeight: '2rem',
  padding: '0 0 2rem'
}

const HeroRight = {
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}

const HeroLeft = {
  width: '40%'
}

const HeroImage = {
  width: '100%',
  height: 'auto'
}
