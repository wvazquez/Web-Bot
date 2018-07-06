import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () =>
  <header>
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav text-center">
            <li id="this"><NavLink to="/">Home</NavLink></li>
            <li><a href="#about">About</a></li>
            <li><NavLink to="/courses">Languages</NavLink></li>
            <li><a href="#schedule">Track</a></li>

          </ul>
          <p className="navbar-text navbar-right hidden-xs">Created by <a href="#" className="navbar-link"><strong>Wils Design</strong></a></p>
        </div>
      </div>
    </nav>
  </header>;

  export default Header;
