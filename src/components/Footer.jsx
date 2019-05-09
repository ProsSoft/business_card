import React from 'react';
import { Link } from 'react-router-dom';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaLinkedIn from "react-icons/lib/fa/linkedin";

// import FaGooglePlus from 'react-icons/lib/fa/google-plus';

import Navigation from './Navigation';
import { footer } from '../constants';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      
      
      <div className="footer__top">
        <Link to="/" className="footer__logo">
          <img className="footer__logo-picture" src="/dist/assets/images/logo.png" alt="logo" />
        </Link>
        
        <div className="footer__nav">
          <span className="footer__title">prossoft</span>
          <Navigation type="footer" />
        </div>
        
        <div className="footer__contacts">
          <div className="footer__title">contact us</div>
          <address className="footer__contacts-address">
            {footer.contacts.map(place => (
              <div
                key={place[0]}
                className="footer__contacts-place"
              >
                {place.map(line => (
                  <div className="footer__contacts-address-element" key={line}>
                    {line}
                  </div>
                ))}
              </div>
            ))}
          </address>
        </div>
      </div>
      
      
      <div className="footer__bottom">
        <span className="footer__rights">{`© 2017 - ${new Date().getFullYear()}. All Rights Reserved`}.</span>
        <div className="footer__social">
          <a className="footer__social-link" target="_blank" href="https://www.facebook.com/prossoftCom/">
            <FaFacebook size="28" />
          </a>
          <a className="footer__social-link" target="_blank" href="https://twitter.com/Prossoft1?s=03">
            <FaTwitter size="28" />
          </a>
          <a className="footer__social-link" target="_blank" href="https://www.linkedin.com/in/prossoft-com-b10852186/">
            <FaLinkedIn size="28" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
