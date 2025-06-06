import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='nav'>
      <div className='navbar1'>
        <div className="top-left">
          <span className="icon">🔍</span>
        </div>
        <div className="top-center">
          <p>FREE SHIPPING WORLDWIDE</p>
        </div>
        <div className="top-right">
          <span className="icon">👤</span>
          <a href='#'>Log In</a>
        </div>
      </div>

      <div className='navbar2'>
        <div className='part1'>
        <Link to="/shop">Shop</Link>
        <Link to="/sale">Sale</Link>
        <Link to="/customer-care">Customer Care</Link>
        <Link to="/stores">Stores</Link>
        </div>
        <div className='part2'>
          <span className="logo">PRETTY GAL</span>
        </div>
        <div className='part3'>
          <span className="icon">🤍</span>
          <span className="icon">🛍️<span className="count">0</span></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
