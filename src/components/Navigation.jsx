import React from 'react';
import { NavLink } from 'react-router-dom';

import { nav } from '../constants';

const Navigation = () => (
  <nav className="nav">
    {nav.map(elem => (
      <NavLink activeClassName="nav__active" className="nav__link" to={elem.path}>
        {elem.title}
      </NavLink>
    ))}
  </nav>
);

export default Navigation;
