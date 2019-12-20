import React from 'react'
// import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import Header from './components/layout/Header'
import Hero from './components/layout/Hero'
import Teams from './components/Teams'
import Team from './pages/Team'
import About from './components/About'

const Home = () => (
  <React.Fragment>
    <Hero />
    <Teams />
  </React.Fragment>
)

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
      <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/team/:teamId' component={Team}/>
          <Route path='/about' component={About}/>
        </Switch>
        
        
          
       
      </div>
      </Router>
    )
  }
}

export default App
