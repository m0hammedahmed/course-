import React from 'react';
import '../css/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-top">
        <ul className="nav-list">
          <li className="unactive">Accueil</li>
          <span className="separator">›</span>
          <li>Apropos</li>
          <span className="separator">›</span>
          <li className="active">Contact</li>
        </ul>
      </div>
      <h3 className="nav-title">Starting SEO as your Home</h3>
    </nav>
  );
}
