import React from 'react';
import { Link } from 'react-router-dom';
import FaBars from 'react-icons/lib/fa/bars';
import Navigation from './Navigation';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="logo">
        <Link to="/">
          <img className="logo__picture" src="../assets/images/logo.png" alt="logo" />
        </Link>
        <button type="button"   className="nav__bar-button">
          <FaBars size="28" />
        </button>
      </div>
      <Navigation />
    </div>
  </header>
);

export default Header;
