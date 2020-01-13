import React, { Component } from 'react'
import Moment from 'react-moment'
import axios from 'axios'
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

    const dateTo = Moment().format('YYYY-MM-DD')
 

    console.log(`Date... ${dateTo}` )

    const gamesResponse = await axios(`https://www.balldontlie.io/api/v1/games?team_ids[]=${this.props.match.params.teamId}&start_date=2019-12-08&end_date=2019-12-19`)
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
          <Moment format="YYYY/MM/DD">{this.props.dateToFormat}</Moment>
          <ul>
            <li><strong>{this.state.team.division} Division</strong></li>
            <li>{this.state.team.conference}ern Conference</li>
          </ul>

        </div>
        <div>
          <ul>
          {this.state.games.map( (game) => {

            return (
              <div key={game.id}>
                <h3>{game.home_team.full_name} V {game.visitor_team.full_name}</h3>
                
                <ul>
                <li >{game.date}</li>
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