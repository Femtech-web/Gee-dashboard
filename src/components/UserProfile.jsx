/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './styles';
import { userProfileData } from './dummy';

const UserProfile = ({ setIsProfileOpen}) => {

  const handleClick = () => {
    setIsProfileOpen(false);
  }

  return (
    <div className={styles.userProfileCont}>
      <div className={styles.between}>
        <button className='rounded-md p-2 dark:text-darkText'
          onClick={() => setIsProfileOpen(false)}>
          <AiOutlineClose fontSize={20} />
        </button>
      </div>
      <div className={styles.avatarCont}>
        <div className='h-24 w-24 rounded-full '>
         <img
          className="h-24 w-24 rounded-full object-cover"
          src='/profile-two.jpg'
          alt="user-profile"
          />
        </div>
        <div>
          <p className={styles.textXl}>Justin Bergson</p>
          <p className={styles.textSm}>Administrator</p>
          <p className={styles.textSmB}>Justin@gmail.com</p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div key={index} className={styles.barCont}
          onClick={(e) => handleClick(e, item.url)}>
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="text-xl rounded-lg p-3"
            >
              {item.icon}
            </button>
            <div>
              <p className="font-semibold dark:text-darkText">{item.title}</p>
              <p className={styles.textSm}> {item.desc} </p>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default UserProfile;
