import React from 'react';
// import { Link } from 'react-router-dom';
import '../css/Footer.css'

const Footer = () => {
  return (
    <footer className="footer--pin">
    {/* <div className="footer-nav">
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/about">ABOUT</Link>
      </li>
      <li>
        <Link to="/contact">CONTACT</Link>
      </li>
    </div> */}
      <p className="copyright">©Wandernder Flecken - 2022</p>
    </footer>
  )
}

export default Footer;