import React, { Component } from 'react'
import axios from 'axios'


export default class Stats extends Component {
  state = {
    stats: []
  }
  async componentDidMount() {
    const res = await axios('https://www.balldontlie.io/api/v1/stats?seasons[]=2019')
    this.setState({stats: res.data.data})
  }

  render() {
    return (
      <div className="container" style={HomeStats}>
        <h2>Stats &amp; Rankings</h2>
        {console.log(this.state.stats)}
        {this.state.stats.map(stat => {
          return (
            <React.Fragment>
            <h3>{stat.player.first_name} {stat.player.last_name}</h3>
            <ul>
              <li><strong>{stat.team.full_name}</strong></li>
              <li><strong>Height: </strong>{stat.player.height_feet}'{stat.player.height_inches}"</li>
            </ul>
            </React.Fragment>
          )
        })}
      </div>
    )
  }
}

const HomeStats = {
  borderTop: '2px solid #26d975',
  padding: '1rem 0'
}
