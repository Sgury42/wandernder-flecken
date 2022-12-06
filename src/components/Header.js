import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <div className="Navbar">
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/about">About</Link>
//       </li>
//       <li>
//         <Link to="/contact">Contact</Link>
//       </li>
//     </div>
//   );
// }

// const handleClick = () => {

// }

const Header = () => {
  return (
    // <header onClick={e => handleClick()}>
    <header>
      <Link to="/">
        <h1>Medical History</h1>
        <h2>Little Known Stories</h2>
        <h3>Fraser Muihead</h3>
      </Link>
    </header>
  )
}

export default Header;