import React, { Component } from 'react'
import axios from 'axios'

export default class Stats extends Component {
  state = {
    stats: []
  }
  async componentDidMount() {
    // const response = await axios('https://www.balldontlie.io/api/v1/stats')

    // let output = ''

    // console.log(response)
    // if (response.status === 200) {
    //   response.data.data.forEach(function(stat) {
    //     output += `<ul>
    //     <li>Player: ${stat.player.first_name} ${stat.player.last_name}</li>
    //     <li>Height: ${stat.player.height_feet}'${stat.player.height_inches}"</li>
    //     <li>Position: ${stat.player.position}</li>
    //     <li>Team: ${stat.team.full_name}</li>
    //     </u>
    //     `
    //   })
    // } else {
    //   console.log('Something went wrong')
    // }
    // console.log(output)
    axios
      .get('https://www.balldontlie.io/api/v1/stats')
      .then(res => this.setState({ stats: res.data.data }))
  }

  render() {
    return (
      <div className="container" style={HomeStats}>
        <h2>Stats &amp; Rankings</h2>
        {console.log(this.state.stats)}
        this.state.stats.forEach(i => {console.log(i)});
      </div>
    )
  }
}

const HomeStats = {
  borderTop: '2px solid #26d975',
  padding: '1rem 0'
}
