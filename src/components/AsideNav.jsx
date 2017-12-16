/* eslint-disable react/prop-types */
import React from 'react';
import FaBars from 'react-icons/lib/fa/bars';
import Navigation from './Navigation';

const AsideNav = props => (
  <div className="aside-nav">
    <div className="aside-nav__header">
      <button type="button" className="aside-nav__header-button" onClick={props.handleAsideNav}>
        <FaBars size="28" /></button>

    </div>
    <Navigation type="aside" />
  </div>
);

export default AsideNav;
