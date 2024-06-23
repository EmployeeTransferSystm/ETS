// Header.js
import React from 'react';
import './Header.css'; // Import CSS file for styling


const Header = () => {
  return (
    <div>
    <div className="header-container">
      <h1 className="header-title">Employee Transfer System</h1>
      
    </div>
    <nav className="navbar-secondary">
        <h1 className="navbar-secondary-title"> <a href='login.js'>Home</a> </h1> {/* Home link */}
        
      </nav>
    </div>

    
  );
};

export default Header;
