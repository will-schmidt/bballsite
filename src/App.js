import React from 'react'
// import axios from 'axios'
import './App.css'
import Header from './components/layout/Header'
import Hero from './components/layout/Hero'
import Stats from './components/Stats'

class App extends React.Component {
  state = {
    stats: null
  }
  // async componentDidMount() {
  //   const response = await axios('https://www.balldontlie.io/api/v1/stats')

  //   let output = ''

  //   console.log(response)
  //   if (response.status === 200) {
  //     response.data.data.forEach(function(stat) {
  //       output += `<ul>
  //       <li>Player: ${stat.player.first_name} ${stat.player.last_name}</li>
  //       <li>Height: ${stat.player.height_feet}'${stat.player.height_inches}"</li>
  //       <li>Position: ${stat.player.position}</li>
  //       <li>Team: ${stat.team.full_name}</li>
  //       </u>
  //       `
  //     })
  //   } else {
  //     console.log('Something went wrong')
  //   }
  //   console.log(output)
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Stats />
      </div>
    )
  }
}

export default App
