import React from 'react';
import { Logo, Navigation } from 'components';
import './styles.scss';

const navigationLinks = [
  { to: '#', text: 'Home' },
  { to: '/about', text: 'about' },
  { to: '/work', text: 'work' },
];

const Header = () => (
  <header className="header">
    <div className="wrapper">
      <Logo />
      <Navigation classNamePrefix="header" links={navigationLinks} />
    </div>
  </header>
);

export default Header;
