import React from 'react';
import './Header.css'; // Import CSS file for styling

const Header = ({ onNavigate }) => {
  return (
    <div>
      <div className="header-container">
        <h1 className="header-title">Employee Transfer System</h1>
      </div>
      <nav className="navbar-secondary">
        <h1 className="title">
          <button className="button" onClick={() => onNavigate('dashboard')}>
            Home
          </button>
        </h1> 
        <h1 className="logOut">
          <button className="button" onClick={() => onNavigate('login')}>
            Logout
          </button>
        </h1> 
      </nav>
    </div>
  );
};

export default Header;
