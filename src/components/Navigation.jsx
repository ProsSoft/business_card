import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => (
  <nav className="nav">
    <NavLink className="nav__link" to="#company">Company</NavLink>
    <NavLink className="nav__link" to="#services">Services</NavLink>
    <NavLink className="nav__link" to="#portfolio">Portfolio</NavLink>
    <NavLink className="nav__link" to="#careers">Careers</NavLink>
    <NavLink className="nav__link" to="#contact">Contacts us</NavLink>
  </nav>
);

export default Navigation;
