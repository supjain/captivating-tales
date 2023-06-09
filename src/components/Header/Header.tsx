
import { Link } from 'react-router-dom';
import { IHeaderProps } from '../../Types/HeaderType.types';

import addPostLogo from '../../assets/addpost.svg'
import './Header.css';
import { useState } from 'react';


const Header :React.FC<IHeaderProps>= (
  props : IHeaderProps
  ) => {

    //For Toast mesage
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
  <div className="header-box">
    <div className='header-left'>
    <Link className="home-link" to='/'>
    Captivating Tales
    </Link>
    </div>
    <div className="header-right" onClick={() => {props.setOpenModal(true);}}>
        <img className='add-post-logo' src={addPostLogo} alt='Add Post' title="Add Post"/>
    </div>

    
  </div>
  );
}

export default Header;