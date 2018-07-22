/* eslint-disable no-console */
import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { nav } from '../../constants'

const Navigation = ({ type }) =>
    <nav className={`nav nav__${type}`}>
      {type === 'aside' && (
        <NavLink
          className={`nav__${type}-link`} to="/home"
          activeClassName={`nav__${type}-link--active`}
          isActive={(match, location) => match && match.path === '/home'}
        >
          Home
        </NavLink>
      )}

      {nav.map(({ title, path, isActive }) => (
        <NavLink
          {...{ isActive }}
          className={`nav__${type}-link`}
          activeClassName={`nav__${type}-link--active`}
          key={title}
          to={path}
        >
          {title}
        </NavLink>
      ))}
    </nav>;

Navigation.propTypes = {
  type: PropTypes.string.isRequired
};

export default Navigation;
