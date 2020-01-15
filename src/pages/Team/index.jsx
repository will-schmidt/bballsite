import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import axios from 'axios'
import moment from 'moment'
import './team.css'

export default class Team extends Component {
  state = {
    team: null,
    games: []
  }

  async componentDidMount(){
    const teamResponse = await axios(`https://www.balldontlie.io/api/v1/teams/${this.props.match.params.teamId}`)
    // console.log('found player', response.data)
    this.setState({
      team: teamResponse.data
    })

    const dateTo = moment().format('YYYY-MM-DD')
    const dateFrom = moment().subtract(10,'d').format('YYYY-MM-DD')
 

    const gamesResponse = await axios(`https://www.balldontlie.io/api/v1/games?team_ids[]=${this.props.match.params.teamId}&start_date=${dateFrom}&end_date=${dateTo}`)
    console.log(gamesResponse.data)

    this.setState({
      games: gamesResponse.data.data
    })

    
  }
  
  
  
  render() {
    


    if(!this.state.team) return null
    return (
      
      <section className="Team container" style={IndividualTeam}>
        
        <div className='team-img-wrapper' >
          <img src={`http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/${(this.state.team.abbreviation).toLowerCase()}.png`} alt={this.state.team.full_name}  />
        </div>
       
        <div style={TeamDetails}>
          <h1>{this.state.team.full_name}</h1>
          
          <ul>
            <li><strong>{this.state.team.division} Division</strong></li>
            <li>{this.state.team.conference}ern Conference</li>
          </ul>

        </div>
        <div>
          <ul>
          {this.state.games.map( (game) => {
              let isHomeTeam
              let wonGame
              if (game.home_team.id === this.props.match.params.teamId) {
                isHomeTeam = true
                if (game.home_team_score > game.visitor_team_score) {
                  wonGame = true
                } else {
                  wonGame = false
                }
              } else {
                isHomeTeam = false
                if (game.visitor_team_score > game.home_team_score) {
                  wonGame = true
                } else {
                  wonGame = false
                }
              }
            
            return (
              <div key={game.id}>
 
                <h3><Link exact to={`/team/${game.home_team.id}`}>{game.home_team.full_name}</Link> vs <Link to={`/team/${game.visitor_team.id}`}>{game.visitor_team.full_name}</Link></h3>
                
                <ul>
                  <li>{wonGame ? `<span class="won">Won</span>` : `<span class="lost">Lost</span>`}</li>
                  <li>{isHomeTeam ? 'Home game' : 'Away game'}</li>
                <li >{game.date}></li>
                <li >{game.home_team_score} - {game.visitor_team_score}</li>
                </ul>
              </div>             
            )
          })}
          </ul>
        </div>
        </section>

    )
  }
}


const IndividualTeam = {
  padding: '2rem 1rem',
  display: 'flex'
}

// const TeamLogo = {
//   maxWidth: '200px'
// }

const TeamDetails = {
  paddingTop: '2rem'
}