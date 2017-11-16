/* eslint-disable no-console,react/prop-types */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import FaBars from 'react-icons/lib/fa/bars';

import Navigation from './Navigation';
import AsideNav from './AsideNav';

class Header extends Component {
  state = {
    asideOpen: false
  };

   componentWillReceiveProps(nextProps) {
    const { pathname, hash } = this.props.location;
    const { pathname: nextPathName, hash: nextHash } = nextProps.location;

    if (this.state.asideOpen && (pathname !== nextPathName || hash !== nextHash)) {
      this.handleAsideNav();
    }
  }

  handleAsideNav = () => {
    this.setState(prevState => ({ asideOpen: !prevState.asideOpen }), this.handleFocusNav);
  };

  handleFocusNav = () => {
    if (this.state.asideOpen) {
      this.asideBar.focus();
    }
  };

  handleClickOutside = evt => {
    console.log('blur');
    if (!evt.currentTarget.contains(evt.relatedTarget)) {
      this.setState({
        asideOpen: false
      });
    }
  };

  render() {
    return (
      <div>
        <div className="wrapper-fixed">
          <header className="header">
            <div className="container header__wrapper">
              <div className="header__logo">
                <Link to="/">
                  <img className="header__logo-picture" src="/dist/assets/images/logo.png" alt="logo" />
                </Link>
              </div>
              <button type="button" className="header__bar-button" onClick={this.handleAsideNav}>
                <FaBars size="28" />
              </button>
              <Navigation type="header" />
            </div>
          </header>
        </div>
        <div className="header__block" />
        <div
          className={['header__aside', this.state.asideOpen && 'header__aside--open'].join(' ')}
          onBlur={this.handleClickOutside}
          tabIndex={-1}
          ref={elem => {
            this.asideBar = elem;
          }}
        >
          <AsideNav handleAsideNav={this.handleAsideNav} />
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
