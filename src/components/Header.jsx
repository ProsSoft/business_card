import React from 'react';
import { Link } from 'react-router-dom';
import FaBars from 'react-icons/lib/fa/bars';
import Navigation from './Navigation';

const Header = () => (
  <div>
    <div className="wrapper-fixed">
      <header className="header">
        <div className="container header__wrapper">
          <div className="header__logo">
            <Link to="/">
              <img className="header__logo-picture" src="/dist/assets/images/logo.png" alt="logo" />
            </Link>
            <button type="button" className="header__bar-button">
              <FaBars size="28" />
            </button>
          </div>
          <Navigation type="header" />
        </div>
      </header>
    </div>
    <div className="header__block" />
  </div>
);

export default Header;
