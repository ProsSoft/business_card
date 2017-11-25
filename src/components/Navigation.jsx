/* eslint-disable no-console, no-nested-ternary */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { nav } from '../constants';

const Navigation = ({ type }) => {
  const hashCheckContacts = (match, location) => {
    if (match === null && location.pathname === '/' && location.hash === '#contacts') {
      return true;
    }
    return false;
  };

  const hashCheckServices = (match, location) => {
    if (match === null && location.pathname === '/' && location.hash === '#services') {
      return true;
    }
    return false;
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
          isActive={elem.activeHash ? (elem.activeHash === 'services' ? hashCheckServices : hashCheckContacts) : null}
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
