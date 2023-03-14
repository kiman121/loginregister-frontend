import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../actions/userActions';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showSubMenu, setShowSubmenu] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <header>
      <nav>
        <div className='navbar'>
          <div className='logo'>
            <Link to='/'>loginRegisterApp</Link>
          </div>
          <div className='profile-details'>
            <ul className='profile-menu'>
              <li
                className={
                  showSubMenu ? 'has-submenu show-menu' : 'has-submenu'
                }
                onMouseEnter={() => setShowSubmenu(true)}
                onMouseLeave={() => setShowSubmenu(false)}
              >
                <div>
                  <img src={`/assets/users/${userInfo.photo}`} alt='' />
                  <span className='name'>{userInfo.firstName}</span>
                  <i className='fa-solid fa-angle-down arrow'></i>
                </div>
                <ul className='profile-menu-items'>
                  <li>
                    <Link to='/user-profile'>Profile</Link>
                  </li>
                  <li onClick={logoutHandler}>Logout</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
