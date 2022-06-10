import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.styles.css';

export const Header = ({score, maxScore}) => {
  return (
    <header>
      <div className="nes-container with-title is-centered">
        <p className="title">Game</p>
        <nav className="nav__game">
          <div>
            <p>Score: {score}</p>
          </div>
          <div>
            <p>Max-score: {maxScore}</p>
          </div>
          <div>
            <NavLink className="nes-btn" to="/">Go back</NavLink>
          </div>
        </nav>
      </div>
    </header>
  )
};
