import React from 'react';
import { Link } from 'components';
import './styles.scss'

const Navigation = props => {
  const { links, className } = props;
  return (
    <nav className={className}>
      {links &&
        links.map(link => (
          <Link key={link.text} className="nav-link" to={link.to}>
            {link.text}
          </Link>
        ))}
    </nav>
  );
};

export default Navigation;
