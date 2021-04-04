import React from 'react';
import './Header.css';

const Header = ({ setCartActive }) => {
  return (
    <header className="header">
      <h1 className="header-title">Commerce</h1>
      <div onClick={() => setCartActive(true)} className="cart-menu">
        Cart
      </div>
    </header>
  );
};

export default Header;
