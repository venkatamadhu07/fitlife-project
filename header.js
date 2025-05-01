import React from 'react';

export default function Header() {
  return (
    <header className="header" data-header>
      <div className="container">
        <a href="#" className="logo">
          <ion-icon name="barbell-sharp" aria-hidden="true"></ion-icon>
          <span className="span">Fitlife</span>
        </a>
        {/* Rest of nav goes here */}
      </div>
    </header>
  );
}
