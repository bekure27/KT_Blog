import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
    <Link to="/" className='logo'> KT-Logo </Link>
    <nav>
      <Link to ="/login">Login</Link>
      <Link to ="/signup">Sign Up</Link>
    </nav>
  </header>
  );
}

export default Header