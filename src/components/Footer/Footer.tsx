import { Link } from 'react-router-dom';
import './Footer.css';

const  Footer = () => {
  return (<div className="footer-box">
    <div>
    <Link className="about-link" to='/about'>
      About
    </Link>
    </div>
   <div>
    <Link className="contact-link" to='/contacts'>
      Contacts
    </Link>
    </div>
    <div className='copyright-claim'><p>© 2023 - Captivating Tales</p></div>
  </div>
  );
}

export default Footer;

