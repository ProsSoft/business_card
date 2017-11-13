import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { nav } from '../constants';

const Navigation = ({ type }) => (
  <nav className={`nav nav__${type}`}>
    {type === 'aside' && (
      <NavLink className={`nav__${type}-link`} to="/#top">
        Main
      </NavLink>
    )}
    {nav.map(elem => (
      <NavLink
        className={`nav__${type}-link`}
        exact
        activeClassName={`nav__${type}-link--active`}
        key={elem.title}
        to={elem.path}
      >
        {elem.title}
      </NavLink>
    ))}
  </nav>
);

Navigation.propTypes = {
  type: PropTypes.string.isRequired
};

export default Navigation;
