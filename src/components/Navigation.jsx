import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { nav } from '../constants';

const Navigation = ({ type }) => {
  const hashCheck = (match) => {

    if (!match) {
      return false;
    }
    return true;
  };
  return (
    <nav className={`nav nav__${type}`}>
      {type === 'aside' && (
        <NavLink className={`nav__${type}-link`} to="/" activeClassName={`nav__${type}-link--active`}>
          Home
        </NavLink>
      )}
      {nav.map(elem => (
        <NavLink
          className={`nav__${type}-link`}
          activeClassName={`nav__${type}-link--active`}
          isActive={hashCheck}
          key={elem.title}
          to={elem.path}
        >
          {elem.title}
        </NavLink>
      ))}
    </nav>
  );
};

Navigation.propTypes = {
  type: PropTypes.string.isRequired
};

export default Navigation;
