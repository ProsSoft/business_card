/* eslint-disable react/prop-types */
import React from 'react';
import Navigation from './Navigation';

const AsideNav = props => (
  <div className="aside-nav">
    <div className="aside-nav__header">
      <button type="button" className="aside-nav__header-button" onClick={props.handleAsideNav}>
        x
      </button>
    </div>
    <Navigation type="aside" />
  </div>
);

export default AsideNav;
