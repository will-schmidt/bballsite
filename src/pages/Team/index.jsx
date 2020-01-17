import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import "./team.css";

const baseUrl = "https://www.balldontlie.io/api/v1";

export default class Team extends Component {
  state = {
    team: null,
    games: []
  };

  fetchData = async () => {
    const { teamId } = this.props.match.params;
    const format = "YYYY-MM-DD";
    const dateTo = moment().format(format);
    const dateFrom = moment()
      .subtract(10, "d")
      .format(format);
    const teamResponse = await axios(`${baseUrl}/teams/${teamId}`);
    const gamesResponse = await axios(
      `${baseUrl}/games?team_ids[]=${teamId}&start_date=${dateFrom}&end_date=${dateTo}`
    );

    this.setState({
      team: teamResponse.data,
      games: gamesResponse.data.data
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.match.params.teamId !== this.props.match.params.teamId) {
      this.fetchData();
    }
  }

  render() {
    // TODO: research sort function(by date using moment)
    const { teamId } = this.props.match.params;
    const { team } = this.state;
    if (!this.state.team) return null;

    return (
      <section className="Team container" style={IndividualTeam}>
        <div className="team-img-wrapper">
          <img
            src={`http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.state.team.abbreviation.toLowerCase()}.png`}
            alt={this.state.team.full_name}
          />
        </div>

        <div style={TeamDetails}>
          <h1>{this.state.team.full_name}</h1>

          <ul>
            <li>
              <strong>{this.state.team.division} Division</strong>
            </li>
            <li>{this.state.team.conference}ern Conference</li>
          </ul>
        </div>
        <div>
          <ul>
            {this.state.games.map(game => {
              const isHomeTeam = game.home_team.id === parseInt(teamId);
              const pageTeamScore = isHomeTeam
                ? game.home_team_score
                : game.visitor_team_score;
              const oppositeTeamScore = !isHomeTeam
                ? game.home_team_score
                : game.visitor_team_score;
              const wonGame = pageTeamScore > oppositeTeamScore;
              const inProgress = pageTeamScore === 0 && oppositeTeamScore === 0;

              return (
                <div key={game.id}>
                  <h3>
                    <Link exact to={`/team/${game.home_team.id}`}>
                      {game.home_team.full_name}
                    </Link>
                    vs
                    <Link to={`/team/${game.visitor_team.id}`}>
                      {game.visitor_team.full_name}
                    </Link>
                  </h3>

                  <ul>
                    {inProgress ? (
                      <li>In progress or Scheduled</li>
                    ) : (
                      <li>
                        <span class={wonGame ? "won" : "lost"}>
                          {wonGame ? "Won" : "Lost"}
                        </span>
                      </li>
                    )}

                    <li>{isHomeTeam ? "Home game" : "Away game"}</li>
                    <li>{game.date}></li>
                    <li>
                      {game.home_team_score} - {game.visitor_team_score}
                    </li>
                  </ul>
                </div>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}

const IndividualTeam = {
  padding: "2rem 1rem",
  display: "flex"
};

// const TeamLogo = {
//   maxWidth: '200px'
// }

const TeamDetails = {
  paddingTop: "2rem"
};
