import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketballBall } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

// lodash DEBOUNCE

export default class Header extends React.Component {
  state = {
    value: ""
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  onSubmit = async e => {
    e.preventDefault();
    const response = await axios.get(
      `https://www.balldontlie.io/api/v1/players?search=${this.state.value}`
    );
    console.log(response);
  };

  render() {
    console.log(this.state.value);
    return (
      <header>
        <div style={headerStyleContainer} className="container">
          <Link to="/" style={logoStyle}>
            <FontAwesomeIcon icon={faBasketballBall} />
            BBall Data
          </Link>
          <ul className="header-nav">
            <li>
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <input onChange={this.handleChange} />
        <button onClick={this.onSubmit}>Get player</button>
      </header>
    );
  }
}

const logoStyle = {
  fontWeight: "bold",
  fontFamily: "'Montserrat', 'sans-serif'",
  color: "#000",
  textDecoration: "none",
  fontSize: "2rem",
  letterSpacing: "-0.2rem"
};

const headerStyleContainer = {
  borderBottom: "2px solid #000",
  padding: "1rem 1rem",
  display: "flex",
  alignItems: "flex-end"
};
