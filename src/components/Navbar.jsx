import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav id='nav-overall'>
      <div id='nav-div'>
        <Link to="/" className="nav-a">Home</Link>
        <Link to="/about" className="nav-a">About</Link>
        <Link to="/projects" className="nav-a">Projects</Link>
        <Link to="/contact" className="nav-a">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
