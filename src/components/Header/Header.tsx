import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
  <div className="header-box">
    <Link className="home-link" to='/'>
    Captivating Tales
    </Link>
    
  </div>
  );
}

export default Header;