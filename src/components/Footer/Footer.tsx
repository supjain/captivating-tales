import { Link } from 'react-router-dom';
import './Footer.css';

const  Footer = () => {
  return (<div className="footer-box">
    <div className='footer-left'>
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
    </div>
    <div className='footer-right'>
    <div className='copyright-claim'><p>© 2023 - Captivating Tales</p></div>
    </div>
    
   
    
  </div>
  );
}

export default Footer;

