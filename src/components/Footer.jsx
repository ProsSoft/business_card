import React from 'react';
import { Link } from 'react-router-dom';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaGooglePlus from 'react-icons/lib/fa/google-plus';

import Navigation from './Navigation';
import { footer } from '../constants';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__top">
        <div className="footer__logo">
          <Link to="/">
            <img className="footer__logo-picture" src="/dist/assets/images/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="footer__nav">
          <span className="footer__nav-title">prossoft</span>
          <Navigation />
        </div>
        <div className="footer__contacts">
          <span className="footer__contacts-title">contact us</span>
          {footer.contact.map(elem => <span className="footer__address">{elem}</span>)}
        </div>
      </div>
      <div className="footer__bottom">
        <span className="footer__rights">© 2017. All Rights Reserved.</span>
        <span className="footer__social">
          <a className="footer__social-link" href="#facebok">
            <FaFacebook size="24" color="#818181" />
          </a>
          <a className="footer__social-link" href="#twitter">
            <FaTwitter size="28" color="#818181" />
          </a>
          <a className="footer__social-link" href="#googlePlus">
            <FaGooglePlus size="32" color="#818181" />
          </a>
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
