import React, { Component } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import bgImage from '../assets/images/greybackground.jpg'

export default class Teams extends Component {
  state = {
    teams: []
  }
  async componentDidMount() {
    const res = await axios ('https://www.balldontlie.io/api/v1/teams')
    this.setState({teams: res.data.data})
  }
  render() {
    return (
      <div className="container" style={HomeTeams}>
        {console.log(this.state.teams)}
        {this.state.teams.map(team => {
          const teamImg = `http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/${(team.abbreviation).toLowerCase()}.png`

          return (
          <div style={TeamCard}>
            <div style={TeamCardInner}>
            <Link exact to={`/team/${team.id}`}><img src={teamImg} alt={`${team.full_name} logo`} style={TeamLogo}/></Link>
            </div>
            <Link exact to={`/team/${team.id}`}><h3 style={TeamTitle}>{team.full_name}</h3></Link>
            

          </div>
          )
        }

        )}
      </div>
    )
  }
}



const HomeTeams = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between'
}

const TeamCard = {
  width: '18%',
  textAlign: 'center',
  margin: '1rem 0',
}

const TeamCardInner = {
  // background: '#4281A4',
  background: `url('${bgImage}') no-repeat center center / cover`,
  borderRadius: '50%',
  border: '4px solid #E4DFDA'
}

const TeamLogo = {
  width: '75%'
}

const TeamTitle = {
  marginTop: '1rem'
}