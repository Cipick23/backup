import React from 'react';
// import { useState } from 'react';
import css from './Header.module.css';
import { NavLink } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
// import { useDispatch } from 'react-redux';
// import { logOut } from '../../redux/authorisation/operations';
// import Modal from '../Modal/Modal';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';

const Header = () => {
  const { user } = useAuth();
  // const dispatch = useDispatch();
  // const history = useHistory();
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleLogout = async () => {
  //   try {
  //     await axios.delete('/api/auth/logout');
  //     dispatch(logOut());
  //     localStorage.removeItem('token');
  //     history.push('/login');
  //   } catch (error) {
  //     toast.error('Error logging out. Please try again.');
  //   }
  // };

  const handleExitClick = () => {
    // setIsModalOpen(true);
  };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <div className={css.header}>
      <div className={css.sidebarBrandBox}>
        <div className={css.boxModel}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 25 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_17_848)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.0686 3.08869C15.4052 2.69093 13.7419 1.89542 12.4944 0.702148C11.2469 1.89542 9.58351 2.69093 7.92017 3.08869C8.336 6.6685 9.58351 9.05504 12.4944 11.0438C15.4052 9.05504 17.0686 6.6685 17.0686 3.08869Z"
                fill="#FFB627"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.4051 17.8989L3.76172 4.77295V11.1371L12.9101 21.081L15.4051 17.8989Z"
                fill="#FBFBFB"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.653 16.7058L21.6431 11.1372V5.1709L13.7422 13.9215L16.653 16.7058Z"
                fill="#FBFBFB"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.0688 18.6945V22.2743L21.643 17.1035V13.5237L17.0688 18.6945Z"
                fill="#FBFBFB"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.33592 18.6945L3.76172 13.5237V17.1035L8.33592 22.2743V18.6945Z"
                fill="#FBFBFB"
              />
            </g>
            <defs>
              <clipPath id="clip0_17_848">
                <rect
                  width="23.4894"
                  height="22.4681"
                  fill="white"
                  transform="translate(0.95752)"
                />
              </clipPath>
            </defs>
          </svg>
          <span>Money Guard</span>
        </div>
      </div>
      <ul className={css.sidebarUl}>
        <li className={css.listLi}>
          <NavLink to="/" className={css.navLink}>
            {user.name}
          </NavLink>
          <button type="button" onClick={handleExitClick}>
            Exit
          </button>
        </li>
      </ul>
      {/* {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <p>Are you sure you want to log out?</p>
          <button onClick={handleLogout}>Log out</button>
          <button type="button" onClick={() => dispatch(logOut())}>
            Exit
          </button>
        </Modal>
      )} */}
    </div>
  );
};

export default Header;
