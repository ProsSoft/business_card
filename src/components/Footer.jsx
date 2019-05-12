import React from 'react';
import { Link } from 'react-router-dom';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaLinkedIn from "react-icons/lib/fa/linkedin";

const Footer = () => (
  <footer className="footer">
    <div className="container">
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
      <Link to="/" className="footer__logo">
        <img className="footer__logo-picture" src="/dist/assets/images/logo.png" alt="logo" />
      </Link>
      <div className="footer__rights">{`© 2016 - ${new Date().getFullYear()}. All Rights Reserved`}.</div>
    </div>
  </footer>
);

export default Footer;
