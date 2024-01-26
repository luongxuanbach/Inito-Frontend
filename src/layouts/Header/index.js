// Header.js
import React from 'react';
import logo from '../../assets/images/Logo Inito.png'; // Replace with the path to your logo image

const Header = () => {
  return (
    <header style={{ background: 'white', padding: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
        <nav style={{ marginLeft: '20px' }}>
          <ul style={{ listStyle: 'none', display: 'flex', margin: 0, padding: 0 }}>
            <li style={{ marginRight: '10px' }}><a href="/about">About</a></li>
            <li style={{ marginRight: '10px' }}><a href="/stories">Stories</a></li>
            <li style={{ marginRight: '10px' }}><a href="/blog">Blog</a></li>
            <li style={{ marginRight: '10px' }}><a href="/faq">FAQ</a></li>
            <li style={{ marginRight: '10px' }}><a href="/contacts">Contacts</a></li>
          </ul>
        </nav>
      </div>
      <div style={{ marginTop: '20px' }}>
        <button style={{ padding: '10px', backgroundColor: '#007BFF', color: 'white', border: 'none' }}>
          Get the Initio Kit
        </button>
      </div>
    </header>
  );
};

export default Header;
