import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </div>
  );
}

const Header = () => {
  return (
    <header>
      <h1>Wandernder Flecken</h1>
      <p>An account of a late 18th Century doctor's surgical innovation</p>
      <Navbar />
    </header>
  )
}

export default Header;