import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file

const Header = () => {
  const cart = useSelector(state => state.cart);

  return (
    <header className="header">
      <h1 className="logo">Houseplant Store</h1>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/cart" className="nav-link">Cart ({cart.length})</Link>
      </nav>
    </header>
  );
};

export default Header;
